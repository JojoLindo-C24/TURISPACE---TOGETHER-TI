import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function BotaoCompra() {
    return(
        <Container>
            <Link to={{
                pathname: '/minhaSacola'
            }}>
                <button className="botao">
                    <img src="/assets/images/compra.svg" className="imagem" alt="" />
                </button>
            </Link>
        </Container>
    )
}