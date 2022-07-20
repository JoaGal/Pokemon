import { useRef } from 'react';
import { useContext, useState } from 'react';
import { LoginContext } from '../../App';
import './Login.css';


export const LoginForm = () => {

    const email = useRef('');
    const password = useRef('');
    const [error, setError] = useState();
    const loginContext = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onSuccess = () => {
        loginContext.setLogin("true");
      }

    const handleClick = () => {
        if (email.current.value === 'pokemon@gmail.com' && password.current.value === 'pokemon') {

            setError('');

            window.localStorage.setItem("isLogin", true);

            onSuccess();

        } else {
            setError('Incorrect Data');

        }
    }

    return (
        <>
            <form className='login-container' onClick={handleSubmit}>
                <h2 className='titel-container'>Please enter security account</h2>
                <p className='p-error'>{error}</p>
                <p className='login-p'>Email</p>
                <input type="email" ref={email}/>
                <p className='login-p'>Password</p>
                <input type='password' ref={password}/>
                <button className='button' onClick={handleClick}>Enter</button>
            </form>
        </>
    )
}
