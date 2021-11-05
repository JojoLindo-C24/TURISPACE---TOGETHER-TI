import CabecalhoInDark from "../../components/comum/cabecalhoInDark";
import { Container } from "./styled";

import { Link } from "react-router-dom";

export default function CompraAprovada() {
    return(
        <Container>
            <CabecalhoInDark/>
            <div className="content-line">
                <div className="content-box">
                    <div className="content">
                        <div className="title">Compra Aprovada</div>
                        <img className="img-aproved" src={"../../assets/images/ok 1.png"} alt="" />
                    </div>
                    <div className="buttons">
                        <Link to={{
                            pathname: '/ticketCompra'
                        }}>
                            <button className="more-informations">Mais Informações</button>
                        </Link>
                        <Link to={{
                            pathname: '/'
                        }}>
                            <button className="initial-page">Voltar para a página inicial</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}