import React from 'react';

import { AuthenticationType } from '../../../api/Helpers/AuthenticationType';
import StyledFormLogin from '../../elements/Login/StyledFormLogin';

const FormLogin = (props:any):JSX.Element => {
    const [state, setState] = React.useState<any>({
        username: '',
        mail: '',
        password: '',
        authenticationEnum: AuthenticationType.Password
    });

    const { username, mail, password } = state;

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue:string = e.target.value;
        const inputName:string = e.target.name;

        setState(
            prevState => (
                {
                    ...prevState,
                    [inputName]: inputValue
                }
            )
        );
    };

    return (
        <StyledFormLogin>
            <label className="label">
                <input 
                    className="input"
                    name="username"
                    placeholder="Nom d'Utilisateur"
                    value={username}
                    onChange={handleChange}
                />
            </label>
            <label className="label">
                <input 
                    className="input"
                    name="mail"
                    placeholder="E-Mail"
                    type="email"
                    value={mail}
                    onChange={handleChange}
                />
            </label>
            <label className="label">
                <input 
                    className="input"
                    name="password"
                    placeholder="Mot de Passe"
                    type="password"
                    value={password}
                    onChange={handleChange}
                />
            </label>

            <div className="socialLoginRow">
                <button 
                    className="loginBtn"
                    onClick={() => props.onLogin(state, AuthenticationType.Password)}
                >CONNEXION</button>

                <button 
                    className="loginFBBtn"
                    onClick={() => props.onLogin(state, AuthenticationType.Facebook)}
                >CONNEXION avec Facebook</button>

                <button 
                    className="loginTwitterBtn"
                    onClick={() => props.onLogin(state, AuthenticationType.Twitter)}
                >CONNEXION avec Twitter</button>

                <button 
                    className="loginGoogleBtn"
                    onClick={() => props.onLogin(state, AuthenticationType.Google)}
                >CONNEXION avec Google</button>
            </div>
            
        </StyledFormLogin>
    )
}

export default FormLogin;