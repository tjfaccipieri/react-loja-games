import React from 'react';
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
  return (
    <>
      <div className="navbar fundoPreto">
        <img src={logo} alt="Logo" className="logo" />
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

        <div className='login'>Faça login ou cadastre-se</div>

        <div className='icons'>
          <ShoppingCartOutlinedIcon fontSize="large" />
          <WhatsAppIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
      <div className="navbar blue">
        Segunda navbar, vai vir as categorias depois
      </div>
    </>
  );
}

export default Navbar;
