import React from 'react';

import './style.css'
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NewIncident = () => {
  return (
    <div className="new__incident-container ">
      <div className="new__incident-content ">
        <section>
          <img src={Logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói ppara resolver isso.</p>
          <Link to="/profile" className="back__link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="number" placeholder="Valor em reais" />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
};

export default NewIncident;
