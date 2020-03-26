import React, { useState } from "react";

import './style.css'
import { FiArrowLeft } from 'react-icons/fi/'
import { Logo } from "../../assets";
import { Link, useHistory } from "react-router-dom";
import { API } from '../../services'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  const handleRegister = async e => {
    e.preventDefault()
    const data = { name, email, whatsapp, city, uf }

    const response = await API.post('ong', data)

    try {
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert('Erro no cadastro tente novamente.')
    }
  }

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
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="register__input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
