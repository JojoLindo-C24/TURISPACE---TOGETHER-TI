import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function LoginAdm() {
    return(
            <Container>
                <div class="conteudo">
                    <div className="f1-conteudo">
                        <div class="cabecalho-login">
                            <img src={'../../assets/images/icon-login.svg'} alt="" class="icon-login"/>
                            <div class="login">Login Administrativo</div>
                        </div>
                        <input class="input-email" type="text" placeholder="Digite seu e-mail"/>
                        <div class="linha-email"></div>
                        <input class="input-senha" type="text" placeholder="Digite sua senha"/>
                        <div class="linha-senha"></div>
                        <Link to={{
                            pathname: '/esqueceuSenhaAdm'
                        }}>
                            <a className="esqueceu-senha" href="http://127.0.0.1:5500/html/esqueceu%20_senha/index.html">Esqueceu sua senha?</a>
                        </Link>
                    </div>
                        <Link to={{
                            pathname: '/inicialAdm'
                        }}>
                            <button class="botao-logar">Entrar</button>
                        </Link> 
                </div>
        </Container>
    )
}