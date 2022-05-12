import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import { List } from './List';

export const ListLook = () => {
    const loginContext = useContext(LoginContext);
  return (
    <>
        {loginContext.login === "true" ? <List/> : <Navigate to='/login'/>}
    </>
  )
}
