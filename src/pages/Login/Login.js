
import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { LoginContext } from '../../App';
import { Landing } from '../Landing/Landing';
import { LoginForm } from './LoginForm';


export const Login = () => {

  const loginContext = useContext(LoginContext);


  
  return (
    <>
        {loginContext.login === "true" ? <Navigate to='/'/> : <LoginForm />}
        
    </>
  )
}
