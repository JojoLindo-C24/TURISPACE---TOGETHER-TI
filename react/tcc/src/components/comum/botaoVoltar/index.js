import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function BotaoVoltar() {
    return(
        <Container>
            <Link to={{
                pathname: '../'
            }}>
                <button className="botaoVoltar">
                        <div className="voltar">VOLTAR</div>
                        <img className="img-voltar" src="../../assets/images/Setinha.svg" alt=""/>
                </button>
            </Link>
        </Container>
    )
}