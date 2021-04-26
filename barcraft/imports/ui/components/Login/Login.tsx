import React from 'react';
import HomePage from '../HomePage/HomePage';
import FormLogin from './FormLogin';

const messageText:string = "test message connexion Barcraft";

const Login = (props:any):JSX.Element => {
    return(
        <HomePage messageText={messageText}>
            <FormLogin />
        </HomePage>
    )
}

export default Login;