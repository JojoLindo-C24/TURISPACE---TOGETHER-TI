import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function NovaSenhaAdm() {
    return(
        <Container>
            <div className="f1-container">
                <div class="conteudo">
                    <div class="redefinir-senha">Redefinição de Senha</div>
                    <div className="input">
                        <input class="senha" type="text" placeholder="Digite sua senha"/>
                        <div class="linha-senha"></div>
                    </div>
                    <div className="input">
                        <input class="senha" type="text" placeholder="Confirme sua senha"/>
                        <div class="linha-senha"></div>
                    </div>
                    <Link to={{
                        pathname: '/loginAdm'
                    }}>
                        <button class="botao-redefinir">Confirmar</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}