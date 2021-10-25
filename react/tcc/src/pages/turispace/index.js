import { Container } from "./styled";
import Pacotes from "../../components/comum/produtos";
import { useEffect, useState } from "react";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import Rodape from '../../components/comum/rodape'
import LugarInicial from "../../components/comum/lugarInicial"

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
          {
            id: 1,
            imagem: '/assets/images/Hopi Hari  (1).png',
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 2,
            imagem: '/assets/images/Rincão 2.png',
            titulo: "Rincão",
            componentes: "- 2 ingressos",
            preco: "R$ 110,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 3,
            imagem: '/assets/images/Hot Beach 1.png',
            titulo: "Hot Beach",
            componentes: "- 1 ingresso",
            preco: "R$ 100,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 4,
            imagem: '/assets/images/Thermas dos Laranjais.png',
            titulo: "Thermas dos Laranjais",
            componentes: "- 1 ingresso",
            preco: "R$ 110,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 5,
            imagem: '/assets/images/Thermas do vale 1.png',
            titulo: "Thermas do Vale",
            componentes: "- 1 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 6,
            imagem: '/assets/images/wet in wild 1.png',
            titulo: "Wet´t Wild",
            componentes: "- 1 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          }
        ]

        setProdutos(r);
      }

      

    useEffect(() => {
        listar();
    }, [])


    const [produtos1, setProdutos1] = useState([]);

        function listar1() {  
            const s = [
                {
                    id: 1,
                    imagem: "https://imagens.ebc.com.br/ZnNy-PMxXCSQ8ig6dLoAkuhwmb0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/avenida_paulista_rvsa_081220202132.jpg?itok=KuTl0h-D",
                    nome: "Museu de Artes de São Paulo"
                },
                {
                    id: 2,
                    imagem: '/assets/images/Museu do Futebol.png',
                    nome: "Museu do Futebol"
                },
                {
                    id: 3,
                    imagem: '/assets/images/Museu do Catavento.png',
                    nome: "Museu do Catavento"
                },
                {
                    id: 4,
                    imagem: '/assets/images/Shopping Ibira.png',
                    nome: "Shopping Ibirapuera"
                },
                {
                    id: 5,
                    imagem: '/assets/images/Shopping JK.png',
                    nome: "Shopping JK Iguatemi"
                },
                {
                    id: 6,
                    imagem: '/assets/images/ibirapuera.jpg',
                    nome: "Parque Ibirapuera"
                }
            ]

            setProdutos1(s);
        
        }

    useEffect(() => {
        listar1();
    }, [])

    return(
        <Container>
            <div className="container1">
              <CabecalhoInWhite></CabecalhoInWhite>
              <img className="Turispace" src={"../../assets/images/Turispace 1.png"} alt=""/>
              <div className="Turispace-subtitulo">Compre já seu pacote, e deixe suas férias garantidas</div>
              <div className="Turispace-promocoes">Promoções da Temporada</div>
              <div className="lista-produtos">
                  {produtos.map(item => 
                          <Pacotes 
                          key={item.id}
                          info={item} />
                      )}
              </div>
            </div>
            <div className="container2">
              <div className="Turispace-promocoes">Turismo em São Paulo</div>
              <div className="lugaresInicial">
                {produtos1.map(item => 
                            <LugarInicial 
                            key={item.id}
                            lugares={item} />
                        )}
              </div>
              <a href="/lugares" className="mais-lugares">Ver Mais Lugares</a>
              <Rodape></Rodape>
            </div>
        </Container>
    )
}