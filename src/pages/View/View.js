
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../List/Api';
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill, BsShieldFill } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { GiBowieKnife, GiHearts, GiBouncingSword, GiBellShield } from "react-icons/gi";

export const View = () => {

  const [card, setCard] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCard();
  }, [id]);

  const add = () => {
    navigate(`/pokemon/${parseInt(id) + 1}`);
  };

  const ress = () => {
    if (id > 1) {
      navigate(`/pokemon/${parseInt(id) - 1}`);
    }
  };

  const getCard = async () => {
    try {
      const { data } = await Api.get(`api/v2/pokemon/${id}`);
      setCard(data);
      setLoad(true);
    } catch (error) {
      console.log(error.mensage);
    }
  }

  return (
    <>
      {load === true ?
        (<div className='border-8 border-black bg-white p-2 w-80 shadow-2xl shadow-black m-auto mt-40 relative rounded-lg border-neutral-800	text-center	'>
          <p className='float-right p-2 bg-sky-700 absolute top-3.5 right-3.5 text-white rounded-full'>{card.base_experience}</p>
          <img className='bg-amber-400 rounded' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          <h1 className='bg-white  rounded-t-lg text-xl p-2'>{card.name}</h1>
          <div className='bg-white rounded-b-lg text-xs text-black'>
            <div className='flex justify-center'>
              <div className='flex justify-center rounded-lg bg-slate-200 w-20 h-6 pt-1'>
                <GiHearts className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[0]?.base_stat}</p>
              </div>
              <div className='flex justify-center ml-5 rounded-lg bg-slate-200 w-20 h-6 pt-1'>
                <GiBowieKnife className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[1]?.base_stat}</p>
              </div>
              <div className='flex justify-center ml-5 rounded-lg bg-slate-200 w-20 h-6 pt-1'>
                <BsShieldFill className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[2]?.base_stat}</p>
              </div>
            </div>
            <div className='flex justify-center mt-3 mb-2'>
              <div className='flex justify-center rounded-lg bg-slate-200 w-20 h-6 pt-1'>
                <AiTwotoneThunderbolt className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[5]?.base_stat}</p>
              </div>
              <div className='flex justify-center rounded-lg bg-slate-200 w-20 h-6 pt-1 ml-5'>
                <GiBouncingSword className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[3]?.base_stat}</p>
              </div>
              <div className='flex justify-center rounded-lg bg-slate-200 w-20 h-6 pt-1 ml-5'>
                <GiBellShield className='mr-1 text-base mr-3' />
                <p className='pt-0.5'>{card.stats[4]?.base_stat}</p>
              </div>
            </div>
            <p>{card.abilities[0]?.ability.name}</p>
            <p>{card.abilities[1]?.ability.name}</p>
          </div>
        </div>) : null}
      <div className='flex justify-center mt-10'>
        <BsFillCaretLeftSquareFill className='m-10 w-24 h-24 text-sky-700  cursor-pointer ' onClick={ress} />
        <BsFillCaretRightSquareFill className='m-10	w-24 h-24 text-sky-700 cursor-pointer' onClick={add} />
      </div>
    </>
  )
}
