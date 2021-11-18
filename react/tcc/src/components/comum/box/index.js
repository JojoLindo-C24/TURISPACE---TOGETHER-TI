import React from 'react';
import Cookies from 'js-cookie';

import Contador from '../contador/index.js';

import { useState } from 'react';

import { Container } from './styled.js';

export default function CarrinhoItem(props) {

  const [produto, setProduto] = useState(props.info);

  function AlterarQtd(qtd) {
    setProduto({...produto, qtd });

    props.onUpdate(produto.id, qtd)
  }

  function Remover() {
    props.onRemove(produto.id);
  }

  return (
      <Container>
          <div className="Titulo"> {produto.nm_pacote} </div>
          <div className="Preco"> {produto.vl_preco} </div>
          <div className="Number">
            <Contador onChange={AlterarQtd} value={produto.qtd} />
            <button onClick={Remover} className="Imagem"> <img src='/assets/images/lixeira.png' alt=''/> </button>
          </div>
      </Container>
  )
}