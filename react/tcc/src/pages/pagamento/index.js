import React from 'react';
import { Link } from 'react-router-dom';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import BotaoVoltar from '../../components/comum/botaoVoltar'

import * as C from './styled.js';

function Pagamento() {
  return(
    <C.Container> 
      <div className="f1-container">
        <CabecalhoInWhite/>
          <div className="Index">     
            <div className="Container">
              <div className="Conteudo-f1">         
                <div class="Buton-payment"> <img class="cartao" src={"../../assets/images/ic-cartao 3.png"} alt=""/> <span> Pagamento </span></div>    
                <div className="card-number"><input type="text" placeholder="Número do cartão" /><div className="line"></div></div>          
                <div className="name-number"><input type="text" placeholder="Nome impresso no cartão" /><div className="line"></div></div>  
                <div className="validity"><input type="text" placeholder="Validade" /><input type="text" placeholder="CVV" /> </div>
                <div className="parc-number"><input type="text" placeholder="Número de Parcelas" /><button class="buton-cancelar">Cancelar</button></div>
                <Link to={{
                  pathname: '/statusCompra'
                }}>
                  <div className="Finalizar"><button>FINALIZAR COMPRA</button></div>
                </Link>
              </div>
              <div className="Container-2"> 
                <div className="me-bag"> Meus Itens</div>
                  <div className="Tudo"> 
                    <div className="Ingressos"> <span> Ingressos <br/> para Hopi <br/> Hari </span> <span> R$ <br/> 110,00 <br/> (x2) </span> </div>
                    <div className="Lixeira"> <img class="Lixeira" src={"../../assets/images/lixeira.png"} alt=""/> </div>
                    <div className="Ingressos"> <span> Ingressos <br/> para Hopi <br/> Hari </span> <span> R$ <br/> 110,00 <br/> (x2) </span> </div>
                    <div className="Lixeira"> <img class="Lixeira" src={"../../assets/images/lixeira.png"} alt=""/> </div>
                  </div>
                </div>
              </div>
            </div> 
            <BotaoVoltar/> 
      </div>
    </C.Container>
  )
};

export default Pagamento;