import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Produto from '../../models/Produto';
import { buscar } from '../../services/Service';
import { DataState } from '../../Store/Tokens/dataReducer';
import './CardProduto.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
    objectFit: 'contain',
    width: 'auto',
  },
});

function CardProduto() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const tipo = useSelector<DataState, DataState['tipo']>((state) => state.tipo);

  async function getProdutos() {
    await buscar(`/produtos/all`, setProdutos);
  }

  useEffect(() => {
    getProdutos();
    if (tipo !== '') {
      console.log(tipo);
    }
  }, [produtos.length]);

  return (
    <div className="listaCards">
      {produtos.map((produto) => (
        <Card className={classes.root} key={produto.id}>
            <CardActionArea>
            <Link to={`/produto/${produto.id}`} className='text-decorator-none' >
              <CardMedia
                className={classes.media}
                image={produto.foto}
                title={produto.nome}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className='titleDescription'>
                  {produto.nome}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="productDescription"
                >
                  {produto.descricao}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="productDescription"
                >
                  R${produto.preco}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="productDescription"
                >
                  Quantidade em estoque: {produto.quantidade}
                </Typography>
              </CardContent>
              </Link>
            </CardActionArea>
            <CardActions className='cardActions'>
              <Link to={`/produto/${produto.id}`} className='text-decorator-none'>
                <Button size="small" color="primary" variant="contained" fullWidth>
                  Ver mais
                </Button>
              </Link>
            </CardActions>
          </Card>
        
      ))}
    </div>
  );
}

export default CardProduto;
