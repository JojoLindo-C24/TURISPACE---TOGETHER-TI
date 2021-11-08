import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function EsqueceuSenhaAdm() {
    return(
        <Container>
            <div className="Tudo">
            <div class="conteudo">
                        <div class="redefinir-senha"><img src={'../../assets/images/icon-login.svg'} alt="" class="icon-login"/>Esqueceu a Senha</div>
                        <div className="input">
                            <input class="senha" type="text" placeholder="Insira o e-mail cadastrado"/>
                            <div class="linha-senha"></div>
                        </div>
                        <Link to={{
                            pathname: '/admcodigo'
                        }}>
                            <button class="botao-redefinir">Enviar</button>
                        </Link>
                    </div>
                   </div> 
        </Container>
    )
}