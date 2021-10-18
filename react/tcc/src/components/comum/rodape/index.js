import { Rodape } from "./styled";
import { Link } from "react-router-dom";

export default function IndexRodape() {
    return(
        <Rodape>
            <div class="rodape">
                <div class="coluna1">
                    <div class="c1-cima">Siga nossas redes sociais </div>
                    <div class="c1-baixo">
                        <img src={"../../../assets/images/instagram.png"} alt="" class="insta-logo"/>
                        <img src={"../../../assets/images/facebook.png"} alt="" class="face-logo"/>
                        <img src={"../../../assets/images/twitter.png"} alt="" class="twitter-logo"/>
                    </div>
                </div>
                <div class="coluna2">
                    <div class="c2-cima">Entre em contato</div>
                    <div class="c2-baixo">(11) 95247-9539</div>
                    <div class="c2-baixo2">turiSPace@gmail.com</div>
                </div>
                <div class="coluna3">
                    <div class="c3-cima">Endereço</div>
                    <div class="c3-baixo">Av. Coronel Octaviano de Freitas Costa, 463 - SP</div>
                </div>
                <div class="coluna4">
                    <div class="c4-cima">Suporte</div>
                    <div class="c4-baixo">Politica de Privaciade</div>
                    <Link to={{
                        pathname: '/sobreNos'
                    }}>
                        <div className='c4-baixo2'> Sobre nós </div>   
                    </Link>
                   
                </div>
                <div class="coluna5">
                    <div class="c5-cima">Formas de pagamento</div>
                    <img src={"../../../assets/images/cartoes 1.png"} alt="" class="c5-baixo"/>
                </div>
            </div>
        </Rodape>
    )
}
export {IndexRodape};