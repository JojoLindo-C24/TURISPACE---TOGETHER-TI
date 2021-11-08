import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function EsqueceuSenhaAdm() {
    return(
        
        <Container>
            <div className="f1-container">
                <div class="cabecalho">
                    <img src={"../assets/images/icon-login.svg"} alt="" class="logo-usuario"/>
                    <div class="esqueceu-senha">Esqueceu sua senha</div>
                </div>
                <div className="email">
                    <input class="input-email" type="text" placeholder="Insira o e-mail cadastrado"/>
                    <div class="linha-email"></div>
                </div>
                <Link to={{
                    pathname: '/codigoAdm'
                }}>
                    <button class="botao-esqueceu-senha">Enviar</button>
                </Link>
            </div>
        </Container>
    )
}