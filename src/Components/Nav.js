import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {



  return (
    <div className='box-nav'>
      <div className='title-small' >
        <Link to='/'>
          Pokemon
        </Link>
      </div>
      <ul className='ul-nav' >
        <li className='li-nav'><Link to='/'>Home</Link></li>
        <li className='li-nav'><Link to='/list'>Lista de Pokemons</Link></li>
        <li className='li-nav'><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}
