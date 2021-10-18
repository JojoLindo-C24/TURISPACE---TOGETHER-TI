import { Container } from "./styled";
// import Pacotes from "../../components/comum/produtos";
// import { useState } from "react";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import Rodape from '../../components/comum/rodape'
import { Link } from "react-router-dom";

export default function Home() {
    // const [produtos, setProdutos] = useState([]);

    // function listar() {
    //     const r = [
    //       {
    //         id: 1,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       },
    //       {
    //         id: 2,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       },
    //       {
    //         id: 3,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       },
    //       {
    //         id: 4,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       },
    //       {
    //         id: 5,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       },
    //       {
    //         id: 6,
    //         imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
    //         titulo: "Hopi Hari",
    //         componentes: "- 2 ingressos",
    //         preco: "R$ 160,00",
    //         descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
    //         botao: "../../../public/assets/images/compra(1).svg"
    //       }
    //     ]
    
    //     setProdutos(r);
    //   }

    return(
        <Container>
            <div className="container1">
              <CabecalhoInWhite></CabecalhoInWhite>
              <img className="Turispace" src={"../../assets/images/Turispace 1.png"} alt=""/>
              <div className="Turispace-subtitulo">Compre já seu pacote, e deixe suas férias garantidas</div>
              <div className="Turispace-promocoes">Promoções da Temporada</div>
              {/* <button className="bt-listar" onClick={listar}>Listar Promoções</button>
              <div className="lista-produtos">
                  {produtos.map(item => 
                          <Pacotes 
                          key={item.id}
                          info={item} />
                      )}
              </div> */}
              <div className="lista-produtos">
              <div className="coluna1">
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="coluna1">
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                  <div className="bloco1">
                    <img className="imagem" src="https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg" alt="" />
                    <div className="conteudo">
                        <div className="top-cont">   
                            <div className="linha-top-cont">
                                <div className="linha-cont"></div>
                                <div className="titulo"> Hopi Hari </div>
                            </div>
                            <div className="componentes"> - 2 Ingressos </div>
                        </div>
                        <br></br>
                        <div className="middle-cont">
                            <div className="preco"> R$ 160,00 </div>
                            <Link to={{
                                pathname: '/detalhePacote'
                            }}>
                                <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                            </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to={{
                            pathname: '/detalhePacote'
                        }}>
                            <button className="mais-info"> Mais Informações </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container2">
              <div className="Turispace-promocoes">Turismo em São Paulo</div>
              <div className="lugaresInicial">
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/museuu.png"} alt="" />
                  <button className="nm-lugar">Museu de Artes de São Paulo</button>
                </div>
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/MuseuFut.png"} alt="" />
                  <button className="nm-lugar">Museu Futebol</button>
                </div>
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/MuseuCatavento.png"} alt="" />
                  <button className="nm-lugar">Museu Catavento</button>
                </div>
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/ShoppingIbira.png"} alt="" />
                  <button className="nm-lugar">Museu de Artes de São Paulo</button>
                </div>
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/ShoppingJK.png"} alt="" />
                  <button className="nm-lugar">Museu Futebol</button>
                </div>
                <div className="bloco2">
                  <img className="img-turismo" src={"../../assets/images/---.png"} alt="" />
                  <button className="nm-lugar">---------</button>
                </div>
              </div>
              <Rodape></Rodape>
            </div>
        </Container>
    )
}