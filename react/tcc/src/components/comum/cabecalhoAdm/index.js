import { CabecalhoAdm } from "./styled";

import { Link } from "react-router-dom";

export default function IndexCabecalhoAdm() {
    return(
        <CabecalhoAdm>
            <div class="Cabecalho">
                <div class="f1-Cabecalho">
                    <div class="Logo"> <img src={"../../assets/images/logo1.svg"} alt=""/> </div>
                    <Link to={{
                        pathname: '/inicialAdm'
                    }}>
                        <button className='botao-cabecalho'> VOLTAR PARA TELA INICIAL </button>   
                    </Link>

                    <div class="Logo"> <img src={"../../assets/images/logo1.svg"} alt=""/> </div>
                </div>
            </div>
        </CabecalhoAdm>
    )
}