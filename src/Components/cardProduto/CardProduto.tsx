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
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto'
  },
});

function CardProduto() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const tipo = useSelector<DataState, DataState['tipo']>(
    (state) => state.tipo
  )

  async function getProdutos() {
    await buscar(`/produtos/all`, setProdutos);
  }

  useEffect(() => {
    getProdutos();
    if(tipo !== '') {
      console.log(tipo)
    }
  }, [produtos.length]);

  return (
    <div className="listaCards">
      {produtos.map((produto) => (
        <Card className={classes.root} key={produto.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={produto.foto}
              title={produto.nome}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
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
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/produto/${produto.id}`}>
              <Button size="small" color="primary" variant="contained">
                Ver mais
              </Button>
            </Link>

            {}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default CardProduto;
