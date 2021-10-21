import { Container } from "./styled";
import Pacotes from "../../components/comum/produtos";
import { useEffect, useState } from "react";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import Rodape from '../../components/comum/rodape'
import LugaresInicial from "../../components/comum/lugarInicial"

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
          {
            id: 1,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 2,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 3,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 4,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 5,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          },
          {
            id: 6,
            imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
            titulo: "Hopi Hari",
            componentes: "- 2 ingressos",
            preco: "R$ 160,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            botao: "../../../public/assets/images/compra(1).svg"
          }
        ]

        setProdutos(r);
      }

    function listar1() {  
        const s = [
            {
                id: 1,
                imagem: "https://imagens.ebc.com.br/ZnNy-PMxXCSQ8ig6dLoAkuhwmb0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/avenida_paulista_rvsa_081220202132.jpg?itok=KuTl0h-D",
                nome: "Museu de Artes de São Paulo"
            },
            {
                id: 2,
                imagem: "https://imagens.ebc.com.br/ZnNy-PMxXCSQ8ig6dLoAkuhwmb0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/avenida_paulista_rvsa_081220202132.jpg?itok=KuTl0h-D",
                nome: "Museu de Artes de São Paulo"
            }
        ]

        setProdutos(s);
    
    }

    useEffect(() => {
        listar1();
    }, [])

    useEffect(() => {
        listar();
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
                {produtos.map(item => 
                            <LugaresInicial 
                            key={item.id}
                            info={item} />
                        )}
              </div>
              <Rodape></Rodape>
            </div>
        </Container>
    )
}