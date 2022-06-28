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
import Produto from '../../models/Produto';
import { buscar } from '../../services/Service';
import './CardProduto.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardProduto() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function getProdutos() {
    await buscar(`/produtos/all`, setProdutos);
  }

  useEffect(() => {
    getProdutos();
  }, [produtos.length]);

  return (
    <div className='listaCards'>
      {produtos.map((produto) => (
        <Card className={classes.root}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default CardProduto;
