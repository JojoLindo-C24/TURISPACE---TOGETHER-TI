import { EsqueceuSenha } from "./styled";

import { BackgroundSenha } from "../../components/comum/background-senha/styled";

import { BackgroundLine} from "../../components/comum/backgroundLine/styled"

export default function Index() {
    return(
        <BackgroundSenha>
            <EsqueceuSenha>
                <BackgroundLine>
                    <div class="cabecalho">
                        <img src={"../assets/images/icon-login.svg"} alt="" class="logo-usuario"/>
                        <div class="esqueceu-senha">Esqueceu sua senha</div>
                    </div>
                    <input class="input-email" type="text" placeholder="Insira o e-mail cadastrado"/>
                    <div class="linha-email"></div>
                    <button class="botao-esqueceu-senha">Enviar</button>
                </BackgroundLine>
            </EsqueceuSenha>
        </BackgroundSenha>
    )
}