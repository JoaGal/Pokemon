import { useContext, useState } from 'react';
import { LoginContext } from '../../App';
import './Login.css';


export const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState();
    const loginContext = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onSuccess = () => {
        loginContext.setLogin("true");
      }

    const handleClick = () => {
        if (email === 'pokemon@gmail.com' && password === 'pokemon') {

            setError('');

            window.localStorage.setItem("isLogin", true);

            onSuccess();

        } else {
            setError('Datos Incorrectos');

        }
    }

    return (
        <>
            <form className='login-container' onClick={handleSubmit}>
                <h2 className='titel-container'>Porfavor ingrese la cuenta de seguridad</h2>
                <p className='p-error'>{error}</p>
                <p className='login-p'>Email</p>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                <p className='login-p'>Contraseña</p>
                <input type='password' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='button' onClick={handleClick}>Enviar</button>
            </form>
        </>
    )
}
