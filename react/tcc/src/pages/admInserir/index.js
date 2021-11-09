import React from 'react'
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';


import * as C from './styled.js';



function AmdInserir() {

  return(
    <C.Container>
        <CabecalhoAdm/>
        <div className="Conteudo">
          <div className="Box-Titulo">
            <img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> <span>EDITAR / INSERIR</span>
          </div>
          <div className="Parte2"> 
            <div className="coluna1">
              <input className="inputs-img"></input>
              <input className="inputs" placeholder="Acesso"></input>
              <input className="inputs" placeholder="Informações de Cancelamento"></input>
              <input className="inputs" placeholder="Link"></input>
            </div>
            <div className="coluna2">
              <input className="inputs" placeholder="Nome"></input>
              <input className="inputs" placeholder="Valor"></input>
              <input className="inputs" placeholder="00/00/0000"></input>
              <input className="inputs" placeholder="Qtd. ingressos"></input>
              <input className="inputs" placeholder="Endereço"></input>
              <input className="inputs" placeholder="Horários"></input>
              <button className="botao-alterar">Alterar Modificações</button>
            </div>
          </div>
        </div>
       
    </C.Container>
  )
};

export default AmdInserir;