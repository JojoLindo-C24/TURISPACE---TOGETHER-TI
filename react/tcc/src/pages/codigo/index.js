import { Codigo } from "./styled";

import { BackgroundSenha } from "../../components/comum/background-senha/styled";
import { BackgroundLine } from "../../components/comum/backgroundLine/styled";

export default function Index() {
    return(
        <BackgroundSenha>
            <BackgroundLine>
                <Codigo>
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
                </Codigo>
            </BackgroundLine>
        </BackgroundSenha>
    )
}