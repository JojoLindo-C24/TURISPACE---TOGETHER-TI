import React, { useState } from 'react';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import BotaoVoltar from '../../components/comum/botaoVoltar'

import * as C from './styled.js';



function InfoLugar(props) {
  const [lugares] = useState(props.location.state);
  return(
    <C.Container>
      <div className="f1-container">
        <CabecalhoInWhite/>
        <div className="Conteudo">
          <div className="esquerda">
            <img className="img-lugares" src={lugares.imagem} alt="" />
            <div className="avaliacao">
              <div className="tittle">AVALIAÇÃO</div>
              <div className="text"></div>
            </div>
          </div>
          <div className="direita">
            <div className="nome">{lugares.nome}</div>
            <div className="informacoes">
              <div className="tittle">INFORMAÇÕES</div>
              <div className="text"></div>
            </div>
            <div className="horario">
              <div className="tittle">HORÁRIO</div>
              <div className="text"></div>
            </div>
            <div className="endereco">
              <div className="tittle"></div>
              <div className="text"></div>
            </div>
          </div>
        </div>
        <BotaoVoltar/>
      </div>
    </C.Container>
  )
};

export default InfoLugar;