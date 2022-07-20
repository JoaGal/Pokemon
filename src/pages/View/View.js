
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../List/Api';
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill, BsShieldFill } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { GiBowieKnife, GiHearts, GiBouncingSword, GiBellShield } from "react-icons/gi";
import './View.css'
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
        (<div className='box-card'>
          <p className='xp-card'>{card.base_experience}</p>
          <img className='img-card' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
          <h1 className='name-card'>{card.name}</h1>
          <div className='bg-stats-card'>
            <div className='bg-stats'>
              <div className='box-stats-card1'>
                <GiHearts className='icon-card' />
                <p className='card-stats'>{card.stats[0]?.base_stat}</p>
              </div>
              <div className='box-stats-card2'>
                <GiBowieKnife className='icon-card' />
                <p className='card-stats'>{card.stats[1]?.base_stat}</p>
              </div>
              <div className='box-stats-card2'>
                <BsShieldFill className='icon-card' />
                <p className='card-stats'>{card.stats[2]?.base_stat}</p>
              </div>
            </div>
            <div className='bg-stats2'>
              <div className='box-stats-card1'>
                <AiTwotoneThunderbolt className='icon-card' />
                <p className='card-stats'>{card.stats[5]?.base_stat}</p>
              </div>
              <div className='box-stats-card2'>
                <GiBouncingSword className='icon-card' />
                <p className='card-stats'>{card.stats[3]?.base_stat}</p>
              </div>
              <div className='box-stats-card2'>
                <GiBellShield className='icon-card' />
                <p className='card-stats'>{card.stats[4]?.base_stat}</p>
              </div>
            </div>
            <p>{card.abilities[0]?.ability.name}</p>
            <p>{card.abilities[1]?.ability.name}</p>
          </div>
        </div>) : null}
      <div className='box-button2'>
        <BsFillCaretLeftSquareFill className='button-page' onClick={ress} />
        <BsFillCaretRightSquareFill className='button-page' onClick={add} />
      </div>
    </>
  )
}
