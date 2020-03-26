import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'
import { API } from '../../services';

const Profile = () => {
  const [incidents, setIncidents] = useState([])

  const ongId = localStorage.getItem('ong_id')
  const ongName = localStorage.getItem('ong_name')

  const history = useHistory()

  useEffect(() => {
    API.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(respose => {
      setIncidents(respose.data)
    })
  }, [ongId])

  const handleDeleteIncidents = async (id) => {
    try {
      await API.delete(`incident/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile__container">
      <header>
        <img src={Logo} alt="Be To Hero" />
        <span>Bem Vinda, {ongName}</span>
        <Link className="button" to="/incident/new-incident">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02141" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>

        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(incident.value)
            }</p>

            <button type="button" onClick={() => handleDeleteIncidents(incident.id)}>
              <FiTrash2 size={16} color="#a8a8b3" />
            </button>
          </li>
        ))}

      </ul>
    </div>
  )
};

export default Profile;
