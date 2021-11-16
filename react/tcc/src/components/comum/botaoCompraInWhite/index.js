import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function BotaoCompra(props) {
    return(
        <Container>
            <Link to={{
                state: props.info,
                pathname: '/minhaSacola'
            }}>
                <button className="botao">
                    <img src="/assets/images/compra.svg" className="imagem" alt="" />
                </button>
            </Link>
        </Container>
    )
}