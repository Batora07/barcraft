import React from 'react';
import HomePage from '../HomePage/HomePage';
import FormLogin from './FormLogin';
import Header from '../Common/Header/Header';

import { Meteor } from 'meteor/meteor';

const messageText:string = "test message connexion Barcraft";

const Login = (props:any):JSX.Element => {

    const handleLogin = (state:any):void => {
        Meteor.call('user.login', state, (err: any, res: any) => {
            const {password, username} = state;
            if(err) {
                console.log('error login', err);
            }
            else {
                // connect user
                console.log('resultat', res);
                Meteor.loginWithPassword(username, password, (err: any, res: any) => {
                    if(err){
                        console.log('err', err);
                    }
                    else {
                        console.log('res', res);
                        props.history.push('/dashboard');
                    }
                });
            }
        });
    };

    return(
        <>
        <Header/>
        <HomePage messageText={messageText}>
            <FormLogin onLogin={handleLogin}/>
        </HomePage>
        </>
    )
}

export default Login;