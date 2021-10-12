import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Pacotes(props) {
    return(
        <Container>
            <div className="bloco">
                <img className="imagem" src={props.info.imagem} alt="" />
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
                        <Link to={{
                            pathname: '/detalhePacote',
                            state: props.info
                        }}>
                            <button className="bt-compra"> <img className="img-compra" src={"../../assets/images/compra.svg"}/> </button>
                        </Link>
                    </div>
                    <br></br>
                    <br></br>
                    <Link to={{
                        pathname: '/detalhePacote',
                        state: props.info
                    }}>
                        <button className="mais-info"> Mais Informações </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}