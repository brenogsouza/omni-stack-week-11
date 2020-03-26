import React from 'react';
import { HeroImg, Logo } from '../../assets'
import { FiLogIn } from 'react-icons/fi'

import './style.css'

const Login = () => {
  return (
    <div className="login__container">
      <section className="form">
        <img src={Logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro</a>
        </form>
      </section>
      <img src={HeroImg} alt="Heroes" />
    </div>
  )
};

export default Login;
