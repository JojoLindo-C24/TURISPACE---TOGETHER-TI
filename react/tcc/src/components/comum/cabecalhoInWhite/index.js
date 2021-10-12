import { CabecalhoInWhite } from "./styled";

import { Link } from "react-router-dom";

export default function IndexCabecalhoInWhite() {
    return(
        <CabecalhoInWhite>
            <div class="Cabecalho">
                <div class="f1-Cabecalho">
                    <div class="Logo"> <img src={"../../assets/images/logo1.svg"} alt=""/> </div>
                    <Link to={{
                        pathname: '/'
                    }}>
                        <button className='botao-cabecalho'> INÍCIO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/lugares'
                    }}>
                        <button className='botao-cabecalho'> LUGARES </button>   
                    </Link>
                    <Link to={{
                        pathname: '/faleConosco'
                    }}>
                        <button className='botao-cabecalho'> FALE CONOSCO </button>   
                    </Link>
                    <Link to={{
                        pathname: '/meusPacotes'
                    }}>
                        <button className='botao-cabecalho'> MEUS PACOTES </button>   
                    </Link>
                    <Link to={{
                        pathname: '/minhaConta'
                    }}>
                        <button className='botao-cabecalho'> MINHA CONTA </button>   
                    </Link>
                    <div class="Conta"> <img src={"../../assets/images/usuario1.svg"} alt=""/> </div>
                </div>
            </div>
        </CabecalhoInWhite>
    )
}