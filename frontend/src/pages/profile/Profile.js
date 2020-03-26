import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

const Profile = () => {
  return (
    <div className="profile__container">
      <header>
        <img src={Logo} alt="Be To Hero" />
        <span>Bem Vinda, APAD</span>
        <Link className="button" to="/incident/new-incident">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02141" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
};

export default Profile;
