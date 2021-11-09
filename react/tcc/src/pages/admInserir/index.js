import React from 'react'
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';


import * as C from './styled.js';



function AmdInserir() {

  return(
    <C.Container>
        <CabecalhoAdm/>
        <div className="Conteudo">
        <div className="Box-Titulo"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> <span>EDITAR / INSERIR</span></div>
        <div className="Parte2"> 
        </div>
        </div>
       
    </C.Container>
  )
};

export default AmdInserir;