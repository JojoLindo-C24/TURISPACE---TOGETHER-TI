import React from 'react';
import { Link } from 'react-router-dom';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import BotaoVoltar from '../../components/comum/botaoVoltar'
import ItemPgto from '../../components/comum/itemPgto';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import * as C from './styled.js';

function lerUsuarioLogado(navigation) {
  let logado = Cookies.get('usuario-logado')
  if (logado === null)
      navigation.push('/login');

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

function Pagamento() {

  const navigation = useHistory();
  const [produtos, setProdutos] = useState([]);
  let usuarioLogado = lerUsuarioLogado(navigation);


  function listarCarrinho() {

    let carrinho = Cookies.get('carrinho');
    carrinho = carrinho !== undefined
                ? JSON.parse(carrinho)
                : [];

    setProdutos(carrinho);

}

  useEffect(() => {
    listarCarrinho();
  }, [])

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
                  {produtos.map(item => 
                    <ItemPgto key={item.id_pacote}
                      itemPgto={item}
                      // onUpdate={alterar}
                      // onRemove={remover} 
                    />
                  )} 
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