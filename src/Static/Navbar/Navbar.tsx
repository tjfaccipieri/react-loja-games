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
import { buscaIdToken, buscar } from '../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { DataState, TesteState } from '../../Store/Tokens/dataReducer';
import Usuario from '../../models/Usuario';
import { addId, addToken } from '../../Store/Tokens/actions';

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

  const dispatch = useDispatch();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    dataNascimento: '',
    nome: '',
    senha: '',
    usuario: '',
    tipo: '',
  });

  const id = useSelector<DataState, DataState['id']>((state) => state.id);
  const token = useSelector<DataState, DataState['token']>(
    (state) => state.token
  );

  async function getCategorias() {
    await buscar(`/categorias`, setCategorias);
  }

  useEffect(() => {
    getCategorias();
  }, [categorias.length]);

  useEffect(() => {
    getUserById(id);
  }, [token]);

  async function getUserById(id: string) {
    await buscaIdToken(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  function logout() {
    dispatch(addId(''));
    dispatch(addToken(''));
  }

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
            <Link to={'/login'} className="linkLogin">
              {' '}
              login{' '}
            </Link>{' '}
            ou
            <Link to={'/login'} className="linkLogin">
              {' '}
              cadastre-se
            </Link>
          </div>
        ) : (
          <div className="menuLogado">
            <p>Bem vindo {usuario.nome}</p>
            {usuario.tipo == 'admin' ? (
              
                <Link to="/cadastrarProduto" className="linkLogin">
                  Cadastrar produtos
                </Link>
              
            ) : (
              ''
            )}
            <p onClick={logout} className='linkLogin'>Sair</p>
          </div>
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
