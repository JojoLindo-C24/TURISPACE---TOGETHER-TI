import { Link } from "react-router-dom";

import { EsqueceuSenha } from "./styled";

import { BackgroundSenha } from "../../components/comum/background-senha/styled";

import { BackgroundLine} from "../../components/comum/backgroundLine/styled"

export default function Index() {
    return(
        
        <EsqueceuSenha>
            <BackgroundSenha>
                <BackgroundLine>
                    <div class="cabecalho">
                        <img src={"../assets/images/icon-login.svg"} alt="" class="logo-usuario"/>
                        <div class="esqueceu-senha">Esqueceu sua senha</div>
                    </div>
                    <input class="input-email" type="text" placeholder="Insira o e-mail cadastrado"/>
                    <div class="linha-email"></div>
                    <Link to={{
                        pathname: '/codigo'
                    }}>
                        <button class="botao-esqueceu-senha">Enviar</button>
                    </Link>
                </BackgroundLine>
            </BackgroundSenha>
        </EsqueceuSenha>
    )
}