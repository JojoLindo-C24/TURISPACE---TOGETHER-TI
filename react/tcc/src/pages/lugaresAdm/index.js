import React, { useState, useEffect } from 'react';
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';
import Rodape from '../../components/comum/rodape';
import Carousel from "react-multi-carousel";
import Caixa from '../../components/comum/boxCarrosel'
import "react-multi-carousel/lib/styles.css";

import * as C from './styled.js';

function Lugares() {

  const[produtos, setProdutos] = useState([])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function listar() {
    const r = [
      {
        id: 1,
        imagem1: '/assets/images/Hopi Hari  (1).png',
        // imagem2: '/assets/images/Hopi Hari  (1).png',
        // imagem3: '/assets/images/Hopi Hari  (1).png',
        // imagem4: '/assets/images/Hopi Hari  (1).png',
        // imagem5: '/assets/images/Hopi Hari  (1).png',
        titulo: "Hopi Hari",
        componentes: "2 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "7hrs às 19hrs",
        data: "27/11/2021",
        endereco: "O parque temático Hopi Hari está situado na Rodovia dos Bandeirantes Km 72, na cidade de Vinhedo - São Paulo.",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja mais utilizá-lo encaminhe um e-mail para solicitacancelamento@hopihari.com.br e solicitar reembolso de produtos. Essa solicitação deverá ser feita em até 07 (sete) dias corridos após a data de confirmação da compra.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: https://www.hopihari.com.br "
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
      {
        id: 3,
        imagem1: '/assets/images/Hot Beach 1.png',
        titulo: "Hot Beach",
        componentes: "1 ingresso",
        preco: "R$ 100,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "09hrs às 17hrs",
        data: "23/12/2021",
        endereco: "Av. Governador Adhemar Pereira de Barros, 1260, Olímpia, Estado de São Paulo. CEP: 15406-255 Brasil",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse https://www.hotbeach.com.br/ ou mande um e-mail para vendas@hotbeach.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: https://www.hotbeach.com.br/"
      },
      {
        id: 4,
        imagem1: '/assets/images/Thermas dos Laranjais.png',
        titulo: "Thermas dos Laranjais",
        componentes: "1 ingresso",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "09hrs às 17hrs",
        data: "08/11/2021",
        endereco: "Av. do Folclore, 1543 - Jardim Santa Efigênia, Olímpia - SP, 15400-000",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse https://www.termas.com.br/fale-conosco ou ligue (17)3279-3500 e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: ""
      },
      {
        id: 5,
        imagem1: '/assets/images/Thermas do vale 1.png',
        titulo: "Thermas do Vale",
        componentes: "1 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "09hrs às 17hrs",
        data: "10/11/2021",
        endereco: "Av. Linneu de Moura, 205 - Urbanova, São José dos Campos - SP, 12244-380",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse https://www.thermasdovale.com.br/contato ou ligue (12) 2136-8888 e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: https://www.thermasdovale.com.br/"
      },
      {
        id: 6,
        imagem1: '/assets/images/wet in wild 1.png',
        titulo: "Wet´t Wild",
        componentes: "1 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "03/12/2021",
        endereco: "Rod. dos Bandeirantes, s/n - Km 72 - Zona Rural, Itupeva - SP, 13295-000",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.wetnwild.com.br/contato ou ligue (11) 4496-8000 e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.wetnwild.com.br/"
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
      {
        id: 2,
        imagem1: '/assets/images/Rincão 2.png',
        titulo: "Rincão",
        componentes: "2 ingressos",
        preco: "R$ 110,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg",
        horario: "10hrs às 17hrs",
        data: "11/11/2021",
        endereco: "Av. do Jaceguava, 2.222 – Jardim Casa Grande – São Paulo – SP / CEP: 04.870-020",
        cancelamento: "Se você adquiriu algum produto no nosso site e não deseja, mas utilizá-lo acesse http://www.cluberincao.com.br/contato/ ou mande um e-mail para contato@cluberincao.com.br e solicite o reembolso de produtos.",
        acesso: "O ingresso é válido para uma única entrada ao parque durante o dia da sua visita. Ao sair do parque o retorno será permitido somente com a compra de um novo ingresso.",
        link: "Para mais informações acesse: http://www.cluberincao.com.br/"
      },
    ]

    setProdutos(r);
  }

  useEffect(() => {
    listar();
}, [])

const adm = true;

  return (
    <C.Container>
      <CabecalhoAdm />
      <div className="Conteudo-f1">
        <div className="Title-Sp"> São Paulo </div>
        <div className="Little-Text"> <span> Sabemos que a cidade de São Paulo é um estado com muitos pontos turisticos. Diversas instituições culturais, tradições arquitetônica, predios simbolicos, musues e muito mais. Conheça as melhores indicações dessa grande metrópole: </span> </div>
      </div>
      <div className="Conteudo-f2">
        <div className="box">
          <div className="Options"> <span> Shoppings </span> </div>
          <Carousel responsive={responsive} containerClass="carousel-box" >
           {produtos.map(i => 
              <Caixa item={i} adm={adm}/>
            )}
          </Carousel>
        </div>

        <div className="box">
          <div className="Options"> <span> Shoppings </span> </div>
          <Carousel responsive={responsive} containerClass="carousel-box" >
           {produtos.map(i => 
              <Caixa item={i} adm={adm}/>
            )}
          </Carousel>
        </div>

        <div className="box">
          <div className="Options"> <span> Shoppings </span> </div>
          <Carousel responsive={responsive} containerClass="carousel-box" >
           {produtos.map(i => 
              <Caixa item={i} adm={adm}/>
            )}
          </Carousel>
        </div>
      </div>

      <Rodape />

    </C.Container>
  )
};

export default Lugares;