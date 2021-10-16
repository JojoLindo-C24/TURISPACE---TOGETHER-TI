import { Link } from "react-router-dom";

import { BackgroundSenha } from "../../components/comum/background-senha/styled";

import { BackgroundLine} from "../../components/comum/backgroundLine/styled"

import { Container } from "./styled";

export default function SenhaNova(){
    return(
        <BackgroundSenha>
            <BackgroundLine>
                <Container>
                    <div class="conteudo">
                        <div class="redefinir-senha">Redefinição de Senha</div>
                        <div className="input">
                            <input class="senha" type="text" placeholder="Confirme sua senha"/>
                            <div class="linha-senha"></div>
                        </div>
                        <div className="input">
                            <input class="senha" type="text" placeholder="Confirme sua senha"/>
                            <div class="linha-senha"></div>
                        </div>
                        <Link to={{
                            pathname: '/login'
                        }}>
                            <button class="botao-redefinir">Confirmar</button>
                        </Link>
                    </div>
                </Container>
            </BackgroundLine>
        </BackgroundSenha>
    )
}