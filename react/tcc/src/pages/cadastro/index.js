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
                            <input class="input-senha" type="text" placeholder="Insira seu celular"/>
                            <input class="input-senha" type="text" placeholder="Insira seu CPF"/>
                            <Link to={{
                                pathname: '/login'
                            }}>
                               <button class="botao-cadastrar">Cadastrar</button>
                            </Link>
                            <Link to={{
                                pathname: '/login'
                            }}>
                                <button className="login" href="">Já é cadastrado? Login</button>
                            </Link>
                            <Link to={{
                                pathname: '/loginAdm'
                            }}>
                                <button className="bt-adm" href="">
                                    <img className="img-adm" src={"../../assets/images/img-adm.png"} alt='' />
                                    <div className="text-adm">Logar como Administrador</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <IndexRodape/>
        </Cadastro>
        
    )
}