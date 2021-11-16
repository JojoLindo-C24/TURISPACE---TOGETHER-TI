import { Container } from "./styled";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
// import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useState } from "react";

export default function Pacotes(props) {

    // const [produto, setProduto] = useState(props.location.state);

    // const navigation = useHistory();

    // function Comprar () {
    //     let carrinho = Cookies.get('carrinho');
    //     carrinho = carrinho !== undefined
    //             ? JSON.parse(carrinho)
    //             : [];

    //     if(carrinho.some(item => item.id === produto.id) === false)
    //        carrinho.push({...produto, qtd: 1});

    //     Cookies.set('carrinho', JSON.stringify(carrinho));

    //     navigation.push('/minhaSacola')
    // }
    return(
        <Container>
            <div className="bloco">
                <img className="imagem" src={props.info.imagem1} alt="" />
                {/* <img className="imagem" src={props.info.imagem2} alt="" />
                <img className="imagem" src={props.info.imagem3} alt="" />
                <img className="imagem" src={props.info.imagem4} alt="" />
                <img className="imagem" src={props.info.imagem5} alt="" /> */}
                <div className="conteudo">
                    <div className="top-cont">   
                        <div className="linha-top-cont">
                            <div className="linha-cont"></div>
                            <div className="titulo"> {props.info.titulo} </div>
                        </div>
                        <div className="componentes"> {props.info.componentes} </div>
                    </div>
                    <br></br>
                    <div className="middle-cont">
                        <div className="preco"> {props.info.preco} </div>
                        {/* <Link to={{
                            pathname: '/minhaSacola',
                            state: props.info
                        }}> */}
                            {/* <button onClick={Comprar} className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button> */}
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </Container>
    )
}