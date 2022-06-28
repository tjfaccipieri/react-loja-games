import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logopac.png';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import Categoria from '../../models/Categoria';
import { buscar } from '../../services/Service';
import { useSelector } from 'react-redux';
import { DataState, TesteState } from '../../Store/Tokens/dataReducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '33%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

function Navbar() {
  const classes = useStyles();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const tipo = useSelector<TesteState, TesteState['tipo']>(
    (state) => state.tipo
  );
  const id = useSelector<TesteState, TesteState['id']>((state) => state.id);

  async function getCategorias() {
    await buscar(`/categorias`, setCategorias);
  }

  useEffect(() => {
    getCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className="navbar fundoPreto">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Pesquisar produtos"
          />
          <Divider className={classes.divider} orientation="vertical" />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {id === '' ? (
          <div className="login">
            Faça
            <Link to={'/login'}> login </Link> ou
            <Link to={'/login'}> cadastre-se</Link>
          </div>
        ) : (
          <p>ta logado como {tipo}</p>
        )}

        <div className="icons">
          <ShoppingCartOutlinedIcon fontSize="large" />
          <WhatsAppIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
      <div className="navbar blue">
        <ul className="categoryList">
          {categorias.map((categoria) => (
            <li key={categoria.id}>{categoria.tipo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
