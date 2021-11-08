import React from 'react';
import { Link } from "react-router-dom";


function Cabecalho2adm() {
  return (
      <Cabecalho2adm>
              <div class="Cabecalho">
                <div class="f1-Cabecalho">
                    <div class="Logo"> <img src={"../../assets/images/logo1.svg"} alt=""/> </div>
                    <Link to={{
                        pathname: '/inicialAdm'
                    }}>
                        <button className='botao-cabecalho'> INICIAL </button>   
                    </Link>
                    <Link to={{
                        pathname: '/promocoes'
                    }}>
                        <button className='botao-cabecalho'> PROMOÇÕES E TURISMO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/lugaresAdm'
                    }}>
                        <button className='botao-cabecalho'> LUGARES </button>   
                    </Link>
                    <Link to={{
                        pathname: '/admfaleconosco'
                    }}>
                        <button className='botao-cabecalho'> FALE CONOSCO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/aprovacao'
                    }}>
                        <button className='botao-cabecalho'> APROV. COMPRA </button>   
                    </Link>
                    <Link to={{
                        pathname: '/admgerenciamento'
                    }}>
                        <button className='botao-cabecalho'> GEREN. CONTAS </button>   
                    </Link>
                    <div class="Conta"> <img src={"../../assets/images/usuario1.svg"} alt=""/> </div>
                </div>
            </div>
      </Cabecalho2adm>
  )
}

export default Cabecalho2adm;