import { Container } from "./styled";
// import CabecalhoAdm from '../../components/comum/cabecalhoAdm';
import { Link } from "react-router-dom";


export default function InicialAdm() {
    return(
        <Container>
            {/* <CabecalhoAdm> </CabecalhoAdm> */}
            <div className="Container-i">
                <div class="titulo"><img class="logo" src={"../../assets/images/Nome-Turispace.png"} alt=""/></div>
                <div className="titulo"> Central do Administrador </div>
                
                <div className="conteudo">

                    <div className="sobre"> Adicionar Lugares turistico
                    <Link to={{
                        pathname: '/admInserir'
                    }}>
                        <button> INSERIR LUGAR </button>   
                    </Link>
                    </div>

                    <div className="sobre"> Editar Promoções conforme a temporada
                    <Link to={{
                        pathname: '/Promocoes'
                    }}>
                        <button> EDITAR PROMOÇÃO </button>   
                    </Link>
                    </div>

                    <div className="sobre"> Lista de mensagens dos usuarios
                    <Link to={{
                        pathname: '/admMensagens'
                    }}>
                        <button > AVALIAÇÃO DO SITE </button>   
                    </Link>
                    </div>

                    <div className="sobre"> Liberação das compras 
                    <Link to={{
                        pathname: '/aprovacao'
                    }}>
                        <button> APROVAÇÃO DA COMPRA </button>   
                    </Link>
                    </div>

                    <div className="sobre"> Lista de usuarios cadastrado
                    <Link to={{
                        pathname: '/gerenciamentoUsuario'
                    }}>
                        <button className='botao-cabecalho'> GERENCIAMENTO DE CONTAS </button>   
                    </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}