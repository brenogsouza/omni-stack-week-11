import React from "react";

import './style.css'
import { FiArrowLeft } from 'react-icons/fi/'
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register__container">
      <div className="register__content">
        <section>
          <img src={Logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link to="/" className="back__link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Whatsapp" />
          <div className="register__input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
