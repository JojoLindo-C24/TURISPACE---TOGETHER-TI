import { Container } from "./styled";
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';

import { Link } from "react-router-dom";

export default function InicialAdm() {
    return(
        <Container>
            <CabecalhoAdm> </CabecalhoAdm>
            <div className="Container">
                <div className="titulo"> ESTATISTICAS DE COMPRAS </div>
            </div>
        </Container>
    )
}