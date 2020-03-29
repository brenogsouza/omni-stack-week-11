import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Logo } from '../../assets';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'
import { API } from '../../services';

import { makeStyles } from "@material-ui/core/styles";
import './style.css'
import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import CustomAlert from '../../components/CustomAlert';


const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const Profile = () => {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const classes = useStyles();
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
      setLoading(true)
      await API.delete(`incident/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
      handleOpenAlert()
      setLoading(false)
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  const handleOpenAlert = () => {
    setOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  return (
    <div className="profile__container">
      {loading && (
        <>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseAlert}>
        <CustomAlert onClose={handleCloseAlert} severity="success">
          Caso deletado com sucesso !
        </CustomAlert>
      </Snackbar>
    </div>
  )
};

export default Profile;
