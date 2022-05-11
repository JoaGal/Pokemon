
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "./Api"
import "./List.css"
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from "react-icons/bs";



export const List = () => {

  const [pokemon, setPokemon] = useState([]);
  const [pagina, setPagina] = useState(0);
  

  useEffect(() => {
    getPokemons();
  }, [pagina]);


  const getPokemons = async () => {
    try {
      const { data } = await Api.get(`api/v2/pokemon?limit=20&offset=${pagina*20}`);
      setPokemon(data.results);
    } catch (error) {
      console.log(error.mensage);
    }
  }  
  const add = ()=>{
    if(pagina < 44){
    setPagina(pagina + 1);}
  }
  const ress = ()=>{
    if(pagina > 0){
    setPagina(pagina - 1);}
  }

  return (
    <>
      {pokemon.map((props, index) => {

        const id = pagina*20 + (index + 1);

        return (

          <Link to={`/pokemon/${id}`} key={props.name}>
            <div className="box-border text-black inline-block mb-6 mt-28 ml-24 text-center bg-amber-400 w-64 h-72 rounded-md  shadow-2xl shadow-black cursor-pointer">
              <img className="img-poke" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={props.title} />
              <p className="name-poke">{props.name}</p>
            </div>
          </Link>
        )
      }
      )}
      * <div className='flex justify-center mt-20 mb-20'>
        <BsFillCaretLeftSquareFill onClick={ress} className='m-10 w-24 h-24 text-sky-700 cursor-pointer' />
        <BsFillCaretRightSquareFill onClick={add} className='m-10	w-24 h-24 text-sky-700 cursor-pointer' />
      </div>
    </>
  )
}
