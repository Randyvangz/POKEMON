import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import styles from '../components/styles/pokemonDetail.css'

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const myPokemon = useSelector((state) => state.detailt);

  return (
    <div className="im">
      {myPokemon ? (
        <div>
          <h1 className="nombre">{myPokemon.name}</h1>
          <img className="imgpoke" src={myPokemon.img} />
          <h2 className="salud">Salud: {myPokemon.health}</h2>
          <h2 className="ataque">Ataque: {myPokemon.attack}</h2>
          <h2 className="defensa">Defensa: {myPokemon.defense}</h2>
          <h2 className="velocidad">Velocidad: {myPokemon.speed}</h2>
          <h2 className="altura">Altura: {myPokemon.height}</h2>
          <h2 className="peso">Peso: {myPokemon.weight}</h2>
          <div className="tipo">
            {myPokemon.type?.map((objType, index) => {
              return <label key={index}>{objType}</label>;
            })}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to="/home">
        <button className="v">Volver</button>
      </Link>
    </div>
  );
}
