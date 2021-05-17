import React from 'react';
import HomePage from '../HomePage/HomePage';
import FormLogin from './FormLogin';
import Header from '../Common/Header/Header';

import { AuthenticationType } from '../../../api/Helpers/AuthenticationType';
import { Meteor } from 'meteor/meteor';

const messageText:string = "test message connexion Barcraft";

const Login = (props:any):JSX.Element => {

    const handleLogin = (state:any, authType:AuthenticationType):void => {
        console.log(authType);
        switch(authType) { 
            case AuthenticationType.Password: { 
                //console.log("password");
                PasswordLogin(state); 
               break; 
            } 
            case AuthenticationType.Facebook: { 
                FacebookLogin(state);
               //console.log("facebook");
               break; 
            } 
            case AuthenticationType.Twitter: { 
                TwitterLogin(state);
                //console.log("Twitter");
                break; 
             } 
             case AuthenticationType.Google: { 
                GoogleLogin(state);
                //console.log("Google");
                break; 
             } 
            default: { 
               PasswordLogin(state);
               //console.log("password");
               break; 
            } 
        }      
    };

    const PasswordLogin = (state:any):void => {
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

    const FacebookLogin = (state:any):void => {       
        Meteor.loginWithFacebook({
            requestPermissions: ['email']
            }, (err) => {
            if(err){
                // error
                console.log('err', err);
            }
            else {
                // login success
                console.log('login with facebook is successful !');
                props.history.push('/dashboard');
            }
        });        
    };

    const GoogleLogin = (state:any):void => {
        Meteor.call('user.googleLogin', state, (err: any, res: any) => {
            const {password, username} = state;
            if(err) {
                console.log('error google login', err);
            }
            else {
                // connect user
                console.log('resultat', res);
                Meteor.loginWithGoogle(username, password, (err: any, res: any) => {
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


    const TwitterLogin = (state:any):void => {
        Meteor.loginWithTwitter((err: any) => {
            if(err){
                console.log('err', err);
            }
            else {               
                props.history.push('/dashboard');
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