import { Container } from "./styled";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function Pacotes(props) {
    return(
        <Container>
            <div className="bloco">
                <img className="imagem" src={props.info.imagem1} alt="" />
                {/* <img className="imagem" src={props.info.imagem2} alt="" />
                <img className="imagem" src={props.info.imagem3} alt="" />
                <img className="imagem" src={props.info.imagem4} alt="" />
                <img className="imagem" src={props.info.imagem5} alt="" /> */}
                <div className="conteudo">
                <Link>
                    <button className="botao-editar">
                        <img className="img-bt-editar" src={"../../assets/images/Group 21.png"} alt="" />
                    </button>
                </Link>
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
                            pathname: '/detalhePacote',
                            state: props.info
                        }}>
                            <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"} alt=""/> </button>
                        </Link> */}
                    </div>
                    <Link to={{
                        pathname: '/infoPacote',
                        state: props.info
                    }}>
                        <button className="mais-info"> Mais Informações </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}