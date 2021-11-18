import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Box from '../../components/comum/box/index';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
// import IndexRodape from '../../components/comum/rodape';

import * as C from './styled.js';


function lerUsuarioLogado(navigation) {
  let logado = Cookies.get('usuario-logado')
  if (logado === null)
      navigation.push('/login');

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}



function MinhaSacola() {

  // const [qtd, setQtd] = useState(0)
  //   function adicionar(){
  //       setQtd (qtd + 1)
  //   }

  //   function remover(){
  //     setQtd (qtd - 1)
  // }

  function alterar(id, qtd) {
    let alterado = produtos.filter(item => item.id === id);
    alterado.qtd = qtd;
    Cookies.set('carrinho', JSON.stringify(produtos));
  }

  function remover(id) {
      let carrinho = produtos.filter(item => item.id_produto !== id);
      Cookies.set('carrinho', JSON.stringify(carrinho));
      setProdutos([...carrinho]);
      
  }

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
      <CabecalhoInWhite />
      <div className="Container">
        <div className="Conteudo">
          <div className="Box-Titulo"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> <span>Minha Sacola</span></div>
          {/* <Box adicionar={adicionar}  remover={remover}  preco="110,00"  titulo="Ingressos para Hopi Hari" qtd={qtd} />
          <Box adicionar={adicionar}  remover={remover} cada={true}  preco="100,00"  titulo="Ingressos Hot Beach" qtd={qtd} />
          <div className="faixaa"> Total: R$310,00 </div> */}
          <div className="listar-produtos">
            {produtos.map(item => 
              <Box key={item.id_pacote}
                  info={item}
                  onUpdate={alterar}
                  onRemove={remover} 
                  />
            )}           
          </div>
        </div>
        <Link to={{
          pathname: '/pagamento'
        }}>
          <button className="pagar">Pagamento</button>
        </Link>
        </div>
        {/* <IndexRodape /> */}
    </C.Container>
  )
};

export default MinhaSacola;