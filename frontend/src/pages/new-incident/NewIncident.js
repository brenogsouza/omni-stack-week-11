import React, { useState } from 'react';

import './style.css'
import { Logo } from '../../assets';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { API } from '../../services'

const NewIncident = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ong_id')
  const history = useHistory()

  const handleNewIncident = async (e) => {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      await API.post('incident', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')

    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }


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
        <form onSubmit={handleNewIncident}>
          <input placeholder="Título do caso" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="number" placeholder="Valor em reais" value={value} onChange={(e) => setValue(e.target.value)} />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
};

export default NewIncident;
