import { Container } from "./styled";
import Pacotes from "../../components/comum/produtos";
import { useState } from "react";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'

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

    return(
        <Container>
            <CabecalhoInWhite></CabecalhoInWhite>
            <img className="Turispace" src={"../../assets/images/Turispace 1.png"}/>
            <div className="Turispace-subtitulo">Compre já seu pacote, e deixe suas<br></br> férias garantidas</div>
            <div className="Turispace-promocoes">Promoções da Temporada</div>
            <br></br>
            <button className="bt-listar" onClick={listar}>Listar Promoções</button>
            <div className="lista-produtos">
                {produtos.map(item => 
                        <Pacotes 
                        key={item.id}
                        info={item} />
                    )}
            </div>
        </Container>
    )
}