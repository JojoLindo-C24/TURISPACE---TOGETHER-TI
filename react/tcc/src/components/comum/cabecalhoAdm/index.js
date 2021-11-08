import { CabecalhoAdm } from "./styled";

import { Link } from "react-router-dom";

export default function IndexCabecalhoAdm() {
    return(
        <CabecalhoAdm>
            <div class="Cabecalho">
                <div class="f1-Cabecalho">
                    <div class="Logo"> <img src={"../../assets/images/logo1.svg"} alt=""/> </div>
                    <Link to={{
                        pathname: '/inicial'
                    }}>
                        <button className='botao-cabecalho'> INICIAL </button>   
                    </Link>
                    <Link to={{
                        pathname: '/admInicial'
                    }}>
                        <button className='botao-cabecalho'> PROMOÇÕES E TURISMO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/lugares'
                    }}>
                        <button className='botao-cabecalho'> LUGARES </button>   
                    </Link>
                    <Link to={{
                        pathname: '/admMensagens'
                    }}>
                        <button className='botao-cabecalho'> FALE CONOSCO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/aprovacao'
                    }}>
                        <button className='botao-cabecalho'> APROV. COMPRA </button>   
                    </Link>
                    <Link to={{
                        pathname: '/gerenciamentoUsuario'
                    }}>
                        <button className='botao-cabecalho'> GEREN. CONTAS </button>   
                    </Link>
                    <div class="Conta"> <img src={"../../assets/images/usuario1.svg"} alt=""/> </div>
                </div>
            </div>
        </CabecalhoAdm>
    )
}