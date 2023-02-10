import React from 'react';
import { NavLink } from "react-router-dom";
import style from './styles/LandingPage.css'
import pikachu_fondo from '../img/pikachu_fondo.jpg';

import { useDispatch } from 'react-redux';
import { getPokemons } from '../actions/index.js'

const LandingPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => { dispatch(getPokemons()) }, [dispatch]);
  return (

      <div>
          <NavLink to="/home">
            <button className='btn'>INGRESAR</button></NavLink>
      </div>
  );
};


export default LandingPage;

/*
export default function LandingPage() {  
  return (
    <div className="fondo">
      <h1 className="palabraPokemon">POKEMON API</h1>
      <Link to="home">
        <button className="buttonEntrar">INGRESAR</button>
      </Link>
    </div>
  );
}
*/