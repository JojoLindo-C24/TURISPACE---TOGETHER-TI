import React  from 'react';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import BotaoVoltar from '../../components/comum/botaoVoltar'

import * as C from './styled.js';




function InfoLugar(props) {

  let avaliacao = 5

  const lugares = props.location.state;
  return(
    <C.Container>
      <div className="f1-container">
        <CabecalhoInWhite/>
        <div className="Conteudo">
          <div className="esquerda">
            <img className="img-lugares" src={lugares.ds_imagem} alt="" />
            <div className="avaliacao">
              <div className="tittle">AVALIAÇÃO</div>
              <div className="text"> {lugares.ds_avaliacao} </div>
            </div>
          </div>
          <div className="direita">
            <div className="nome"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/>{lugares.nm_lugar}</div>
            <div className="box">
              <div className="tittle">INFORMAÇÕES</div>
              <div className="text">{lugares.ds_informacao}</div>
            </div>
            <div className="box">
              <div className="tittle">HORÁRIO</div>
              <div className="text">{lugares.ds_horario_dds}</div>
              <div className="text">{lugares.ds_horario_fds}</div>
            </div>
            <div className="box">
              <div className="tittle">ENDEREÇO</div>
              <div className="text">{lugares.ds_endereco}</div>
            </div>
          </div>
        </div>
        <BotaoVoltar/>
      </div>
    </C.Container>
  )
};

export default InfoLugar;