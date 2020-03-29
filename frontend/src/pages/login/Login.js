import React, { useState } from 'react';
import { HeroImg, Logo } from '../../assets'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import { API } from '../../services'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Backdrop, CircularProgress } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import './style.css'


const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));


const Login = () => {
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  const classes = useStyles();

  const MySwal = withReactContent(Swal);

  const history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await API.post('session', { id })
      localStorage.setItem('ong_id', id)
      localStorage.setItem('ong_name', response.data.name)
      setLoading(false)

      history.push('/profile')
    } catch (err) {

      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falha no login, tente novamente.',
      })
    }
  }


  return (
    <div className="login__container">
      {loading && (
        <>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
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
