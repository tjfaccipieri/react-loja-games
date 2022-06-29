import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { buscaId } from '../../services/Service';
import './CadastroProduto.css';

function CadastroProduto() {
  return (
    <div className='cadastroProduto'>
      <Typography variant="h4" align="center" gutterBottom>
        Cadastrar novo produto
      </Typography>
      <form>
        <TextField
          id="nome"
          name="nome"
          label="Nome do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
        />
        <TextField
          id="foto"
          name="foto"
          label="URL da foto do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
        />
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="categoria-label">Plataforma</InputLabel>
          <Select labelId="categoria-label" id="categoria">
            <MenuItem>categorias</MenuItem>
            <MenuItem>categorias</MenuItem>
            <MenuItem>categorias</MenuItem>
            <MenuItem>categorias</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="tipo-label">Tipo de produto</InputLabel>
          <Select labelId="tipo-label" id="tipo">
            <MenuItem value="jogo">Jogo</MenuItem>
            <MenuItem value="esportes">Acessório</MenuItem>
          </Select>
        </FormControl>
        <div className='dois'>
        <TextField
          id="valor"
          name="valor"
          label="Preço do produto"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
        />
          <TextField
          id="quantidade"
          name="quantidade"
          label="Quantidade de itens em estoque"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
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
          rows={5}
          fullWidth
        />
        <FormControl fullWidth size="small" margin="normal" variant="outlined">
          <InputLabel id="estilo-label">Estilo</InputLabel>
          <Select labelId="estilo-label" id="estilo">
            <MenuItem value="rpg">RPG</MenuItem>
            <MenuItem value="esportes">Esportes</MenuItem>
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
        />
        <TextField
          id="lancamento"
          label="Data de lançamento"
          type="date"
          name="lancamento"
          size="small"
          margin="normal"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        
      </form>
    </div>
  );
}

export default CadastroProduto;
