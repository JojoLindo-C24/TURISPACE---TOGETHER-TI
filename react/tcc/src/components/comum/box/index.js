import React from 'react';
import Cookies from 'js-cookie';

import Contador from '../contador/index.js';

import { useState } from 'react';

import { Container } from './styled.js';

export default function CarrinhoItem(props) {

  const [produto, setProduto] = useState(props.location.state);

  const [produto1, setProduto1] = useState(props.info)

  function AlterarQtd(qtd) {
    setProduto1({...produto1, qtd });

    props.onUpdate(produto1.id, qtd)
  }

  function Remover() {
    props.onRemove(produto1.id);
  }
  return (
      <Container>
          <div className="Titulo"> {produto.titulo} </div>
          <div className="Preco"> {produto.preco} </div>
          <div className="Number">  
            <Contador onChange={AlterarQtd} value={produto1.qtd} />
            <button onClick={Remover} className="Imagem"> <img src='/assets/images/lixeira.png' alt=''/> </button>
          </div>
      </Container>
  )
}