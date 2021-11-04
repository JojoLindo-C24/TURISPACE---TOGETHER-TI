import React from 'react';

import { Container } from './styled.js';

function box(props) {
  return (
      <Container>
          <div className="Titulo"> {props.titulo} </div>
          <div className="Preco"> R$ {props.preco} {props.cada === true ? "(Cada)" : "(x2)"} </div>
          <div className="Number">  
             <button onClick={props.adicionar}> + </button>
                <div className="Valor"> {props.qtd} </div>
             <button onClick={props.remover}> - </button>
                <div className="Imagem"> <img src='/assets/images/lixeira.png' alt=''/> </div>
          </div>
      </Container>
  )
}

export default box;