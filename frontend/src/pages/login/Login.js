import React, { useState } from 'react';
import { HeroImg, Logo } from '../../assets'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import { API } from '../../services'

import './style.css'

const Login = () => {
  const [id, setId] = useState('')

  const history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const response = await API.post('session', { id })

      localStorage.setItem('ong_id', id)
      localStorage.setItem('ong_name', response.data.name)

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente.')
    }
  }


  return (
    <div className="login__container">
      <section className="form">
        <img src={Logo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
          <button className="button" type="submit">Entrar</button>
          <Link className="back__link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={HeroImg} alt="Heroes" />
    </div>
  )
};

export default Login;
