import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function CodigoAdm() {
    return(
        <Container>
            <div className="f1-container">
                <div class="digite-codigo">Digite o código enviado por e-mail</div>
                <div class="codigo">
                    <div class="numero">
                        <input class="n1" type="text" placeholder="#"/>
                        <div class="linha-codigo"></div>
                    </div>
                    <div class="numero">
                        <input class="n1" type="text" placeholder="#"/>
                        <div class="linha-codigo"></div>
                    </div>
                    <div class="numero">
                        <input class="n1" type="text" placeholder="#"/>
                        <div class="linha-codigo"></div>
                    </div>
                    <div class="numero">
                        <input class="n1" type="text" placeholder="#"/>
                        <div class="linha-codigo"></div>
                    </div>
                </div>
                <Link to={{
                    pathname: '/novaSenhaAdm'
                }}>
                    <button className="botao">Confirmar código</button>
                </Link>
            </div>
        </Container>
    )
}