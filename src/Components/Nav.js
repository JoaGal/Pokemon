
import { Link } from 'react-router-dom'

export const Nav = () => {



  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='flex justify-between bg-white py-4 '>
        <div className='ml-10 text-sky-700 tracking-wide text-xl' >
          Pokemon
        </div>
        <ul className='flex items-center text-amber-400' >
          <li className='mr-20'><Link to='/'>Home</Link></li>
          <li className='mr-20'><Link to='/list'>Lista de Pokemons</Link></li>
          <li className='mr-20'><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </div>
  )
}
