import { Link } from "react-router-dom";

import { Cadastro } from "./styled";

import { IndexRodape } from "../../components/comum/rodape/index";

export default function Index() {
    return(
        <Cadastro>
            <div class="Container">
                <div class="f1-container">
                    <div class="titulo"><img class="logo" src={"../../assets/images/Nome-Turispace.png"} alt=""/></div>
                    <div class="conteudo">
                        <div class="conteudo-esquerda">
                            <div class="CE-faixa1">Conheça os melhores lugares de SP</div>
                            <div class="CE-faixa2">Oferecemos viagens com conforto, segurança e guia de turismo acompanhado por um preço acessível</div>
                            <div class="CE-faixa3">
                                <div class="CE-aviao"><div class="ifen">---</div><img src={"../../assets/images/aviao2.png"} alt=""/></div>
                                <div class="CE-onibus"><div class="ifen">-------</div><img src={"../../assets/images/onibus2.png"} alt=""/></div>
                                <div class="CE-carro"><div class="ifen">--------------</div><img src={"../../assets/images/carrinho2.png"} alt=""/></div>
                                <div class="CE-pessoa"><div class="ifen">---------------------</div><img src={"../../assets/images/pessoa2.png"} alt=""/></div>
                            </div>
                        </div>
                        <div class="conteudo-direita">
                            <div class="cadastrar">Cadastre-se</div>
                            <input class="input-email" type="text" placeholder="Insira seu e-mail"/>
                            <input class="input-senha" type="text" placeholder="Insira sua senha"/>
                            <Link to={{
                                pathname: '/'
                            }}>
                               <button class="botao-cadastrar">Cadastrar</button>
                            </Link>
                            <Link to={{
                                pathname: '/login'
                            }}>
                                <a className="login" href="http://127.0.0.1:5500/html/login/index.html">Já é cadastrado? Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <IndexRodape></IndexRodape>
        </Cadastro>
        
    )
}