import './Nav.css'
import { NavLink } from 'react-router-dom'

export const Nav = () => {



  return (
    <div className='box-nav'>
      <div className='title-small' >
          Pokemon
      </div>
      <ul className='ul-nav' >
        <li className='li-nav'><NavLink to='/'>Home</NavLink></li>
        <li className='li-nav'><NavLink to='/list'>Lista de Pokemons</NavLink></li>
        <li className='li-nav'><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </div>
  )
}
