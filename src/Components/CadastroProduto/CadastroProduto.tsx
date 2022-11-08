import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Categoria from '../../models/Categoria';
import Produto from '../../models/Produto';
import Usuario from '../../models/Usuario';
import {Estilos} from '../../models/utils/Estilos';
import { buscaId, buscar, cadastrarProduto } from '../../services/Service';
import { DataState } from '../../Store/Tokens/dataReducer';
import './CadastroProduto.css';

function CadastroProduto() {
  let history = useHistory();

  const idUsuario = useSelector<DataState, DataState['id']>(
    (state) => state.id
  );
  const token = useSelector<DataState, DataState['token']>(
    (state) => state.token
  );

  const estilos = Estilos

  const [estiloJogo, setEstiloJogo] = useState('')

  const [usuario, setUsuario] = useState<Usuario>({
    id: +idUsuario,
    dataNascimento: '',
    nome: '',
    senha: '',
    usuario: '',
    tipo: '',
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [tipos, setTipos] = useState([
    {
      value: 'jogos'
    },
    {
      value: 'acessorios',
    }
  ])

  const [tipo, setTipo] = useState<typeof tipos>()

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    foto: '',
    tipo: '',
    numeroProdutos: 0,
  });

  async function getCategorias() {
    await buscar(`/categorias`, setCategorias);
  }

  useEffect(() => {
    getCategorias();
  }, [categorias.length]);

  const [prod, setProd] = useState<Produto>({
    id: 0,
    nome: '',
    preco: null,
    quantidade: 0,
    publisher: '',
    tipo: '',
    foto: '',
    estilo: '',
    descricao: '',
    dataLancamento: '',
    curtidos: 0,
    categoria: null,
    usuario: null,
  });

  function handleUpdateProdModel(event: ChangeEvent<HTMLInputElement>) {
    setProd({
      ...prod,
      [event.target.name]: event.target.value,
      estilo: estiloJogo
    });
  }

  function handleTipo(event: ChangeEvent<HTMLSelectElement>) {
    setProd({
      ...prod,
      tipo: event.target.value
    })
  }

  useEffect(() => {
    setProd({
      ...prod,
      categoria: categoria,
      usuario: usuario,
      
    });
    console.log(prod)
  }, [categoria]);

  function handleCadastrarProduto(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      console.log(prod)
      // cadastrarProduto(`/produtos`, prod, setProd, {
      //   headers: {
      //     Authorization: token,
      //   },
      // });
      alert('Produto cadastrado');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="cadastroProduto">
      <Typography variant="h4" align="center" gutterBottom>
        Cadastrar novo produto
      </Typography>
      <form onSubmit={handleCadastrarProduto}>
        <TextField
          id="nome"
          name="nome"
          label="Nome do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          value={prod.nome}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleUpdateProdModel(event);
          }}
        />
        <TextField
          id="foto"
          name="foto"
          label="URL da foto do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          value={prod.foto}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleUpdateProdModel(event);
          }}
        />
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="categoria-label">Plataforma</InputLabel>
          <Select
            labelId="categoria-label"
            id="categoria"
            onChange={(event) =>
              buscaId(`categorias/${event.target.value}`, setCategoria)
            }
          >
            {categorias.map((categoria) => (
              <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="tipo-label">Tipo de produto</InputLabel>
          <Select
            labelId="tipo-label"
            id="tipo"
            
          >
            {tipos.map((tipo)=> (
              <MenuItem value={tipo.value}>{tipo.value}</MenuItem>
            ))}
            

          </Select>
        </FormControl>
        <div className="dois">
          <TextField
            id="preco"
            name="preco"
            label="Preço do produto"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            value={prod.preco}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleUpdateProdModel(event);
            }}
          />
          <TextField
            id="quantidade"
            name="quantidade"
            label="Quantidade de itens em estoque"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            value={prod.quantidade}
            onInput={(event: ChangeEvent<HTMLInputElement>) => {
              handleUpdateProdModel(event);
            }}
          />
        </div>
        <TextField
          id="descricao"
          name="descricao"
          label="Descrição do produto"
          margin="normal"
          variant="outlined"
          size="small"
          multiline
          minRows={5}
          fullWidth
          value={prod.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleUpdateProdModel(event);
          }}
        />
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="estilo-label">Estilo</InputLabel>
          <Select labelId="estilo-label" id="estilo">
            {estilos.map((estilo) => (
              <MenuItem value={estilo.value} onChange={(event) => {
                setEstiloJogo(estilo.value)
              }}>{estilo.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="publisher"
          name="publisher"
          label="Fabricante do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          value={prod.publisher}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleUpdateProdModel(event);
          }}
        />
        <TextField
          id="dataLancamento"
          label="Data de lançamento"
          type="date"
          name="dataLancamento"
          size="small"
          margin="normal"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={prod.dataLancamento}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleUpdateProdModel(event);
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default CadastroProduto;
