import { Container } from "./styled";
import CabecalhoInWhite from "../../components/comum/cabecalhoInWhite"

export default function TicketCompra() {
    return(
        <Container>
            <div className="f1-container">
                <CabecalhoInWhite/>
                <div className="conteudo">
                    
                </div>
                <button className="botaoVoltar">
                    <div className="voltar">VOLTAR</div>
                    <img className="img-voltar" src="../../assets/images/Setinha.svg" alt=""/>
                </button>
            </div>
        </Container>
    )
}