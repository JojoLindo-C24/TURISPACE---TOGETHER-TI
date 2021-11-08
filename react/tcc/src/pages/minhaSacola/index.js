import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Box from '../../components/comum/box/index';

import * as C from './styled.js';



function MinhaSacola() {

  const [qtd, setQtd] = useState(0)
    function adicionar(){
        setQtd (qtd + 1)
    }

    function remover(){
      setQtd (qtd - 1)
  }

  return(
    <C.Container>
      <div className="Container">
        <div className="Conteudo">
          <div className="Box-Titulo"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> <span>Minha Sacola</span></div>
        <Box adicionar={adicionar}  remover={remover}  preco="110,00"  titulo="Ingressos para Hopi Hari" qtd={qtd} />
        <Box adicionar={adicionar}  remover={remover} cada={true}  preco="100,00"  titulo="Ingressos Hot Beach" qtd={qtd} />
        <div className="faixaa"> Total: R$310,00 </div>
        </div>
        <Link to={{
          pathname: '/pagamento'
        }}>
          <button className="pagar">Pagamento</button>
        </Link>
        </div>
    </C.Container>
  )
};

export default MinhaSacola;