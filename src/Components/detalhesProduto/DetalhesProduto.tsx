import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Produto from '../../models/Produto';
import { buscaId } from '../../services/Service';
import { TesteState } from '../../Store/Tokens/dataReducer';
import './DetalhesProduto.css';

function DetalhesProduto() {
  let history = useHistory();

  const { id } = useParams<{ id: string }>();

  const tipo = useSelector<TesteState, TesteState['tipo']>(
    (state) => state.tipo
  );

  const [produto, setProduto] = useState<Produto>();

  async function produtoById(id: string) {
    buscaId(`/produtos/${id}`, setProduto);
  }

  useEffect(() => {
    produtoById(id);
  }, [id]);

  const numberFormat = (value: any) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return (
    <>
      <h1>{produto?.nome}</h1>
      <div className='superiorCard'>
        <img src={produto?.foto} alt={produto?.nome} />
        <div className='superiorCard__Info'>
          <p>Plataforma: {produto?.categoria?.tipo}</p>
          <h2>Valor: {numberFormat(produto?.preco)}</h2>
        </div>
      </div>

      <hr />

      {tipo === 'admin' ? (
        <p>
          Logado como admin
        </p>
      ) :(
          <pre>{produto?.descricao}</pre>
      )}
    </>
  );
}

export default DetalhesProduto;
