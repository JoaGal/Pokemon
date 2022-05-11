import React, { createContext, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from './Components/Nav';
import { Landing } from './pages/Landing/Landing';
import { ListLook } from './pages/List/ListLook';
import { Login } from './pages/Login/Login';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { View } from './pages/View/View';

export const LoginContext = createContext();
export const App = () => {

  const [login, setLogin] = useState(window.localStorage.getItem("isLogin"));


  return (
    <>
      <BrowserRouter>
        <Nav />
        <LoginContext.Provider value={{ setLogin, login }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="Login" element={<Login />} />
            <Route path="List" element={<ListLook />} />
            <Route path={`/pokemon/:id`} element={<View />} />
            <Route path="*" element={<NoMatch /> } />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>


    </>
  )
}
