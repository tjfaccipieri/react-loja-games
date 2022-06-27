import { Button, TextField, Typography } from '@material-ui/core';

import React, { ChangeEvent, useState } from 'react';
import Usuario from '../../models/Usuario';
import UsuarioLogin from '../../models/UsuarioLogin';
import { cadastrarUsuario, login } from '../../services/Service';
import './Login.css';

function Login() {

  const [confirmarSenha, setConfirmarSenha] = useState<String>('')

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    tipo: '',
    token: '',
  });

  function handleUsuarioLoginData(event: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value,
    });
  }

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    dataNascimento: '',
    nome: '',
    senha: '',
    usuario: '',
    tipo: ''
  })

  function handleCadastroUsuarioData(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
      tipo: confirmarSenha === 'senhaAdmin' ? 'padrao' : 'admin'
    })
  }

  function handleConfirmarSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  async function loginSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuarioLogin);
      alert('foi');
      console.log(usuarioLogin);
      setUsuarioLogin({
        ...usuarioLogin,
        usuario: '',
        senha: ''
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function cadastroSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
      alert('cadastrou')
      console.log(usuario)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="telaLogin">
        <div className="logarForm">
          <Typography variant="h4" color="secondary" align="center" style={{fontWeight: 600}}>
            Já tenho cadastro
          </Typography>
          <form onSubmit={loginSubmit}>
            <TextField
              id="outlined-basic"
              label="usuario"
              variant="outlined"
              name="usuario"
              size="small"
              margin="normal"
              fullWidth
              value={usuarioLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUsuarioLoginData(event);
              }}
            />
            <TextField
              id="outlined-basic"
              label="senha"
              variant="outlined"
              name="senha"
              size="small"
              margin="normal"
              type="password"
              fullWidth
              value={usuarioLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleUsuarioLoginData(event);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
            >
              Logar
            </Button>
          </form>
        </div>

        <div className="cadastrarForm">
          <Typography variant="h4" color="secondary" align="center" style={{fontWeight: 600}}>
            Criar minha conta
          </Typography>
          <form onSubmit={cadastroSubmit}>
            <TextField
              id="outlined-basic"
              label="nome"
              variant="outlined"
              name="nome"
              size="small"
              margin="normal"
              fullWidth
              value={usuario.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCadastroUsuarioData(event)
              }
            />
            <TextField
              id="outlined-basic"
              label="usuario"
              variant="outlined"
              name="usuario"
              size="small"
              margin="normal"
              fullWidth
              value={usuario.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCadastroUsuarioData(event)
              }
            />
            <TextField
              id="date"
              label="Data de nascimento"
              type="date"
              name='dataNascimento'
              size='small'
              margin="normal"
              variant="outlined"
              fullWidth
              value={usuario.dataNascimento}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCadastroUsuarioData(event)
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="senha"
              variant="outlined"
              name="senha"
              size="small"
              margin="normal"
              type="password"
              fullWidth
              value={usuario.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCadastroUsuarioData(event)
              }
            />
            <TextField
              id="outlined-basic"
              label="confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              size="small"
              margin="normal"
              type="password"
              fullWidth
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleConfirmarSenha(event);
              }}
            />
            <Button variant="contained" color="primary" size="large" fullWidth type='submit'>
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
