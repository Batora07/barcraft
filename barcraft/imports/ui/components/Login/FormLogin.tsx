import React from 'react';

import StyledFormLogin from '../../elements/Login/StyledFormLogin';

const FormLogin = (props:any):JSX.Element => {
    const [state, setState] = React.useState<any>({
        username: '',
        mail: '',
        password: ''
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

            <button 
                className="loginBtn"
                onClick={() => props.onLogin(state)}
            >CONNEXION</button>
        </StyledFormLogin>
    )
}

export default FormLogin;