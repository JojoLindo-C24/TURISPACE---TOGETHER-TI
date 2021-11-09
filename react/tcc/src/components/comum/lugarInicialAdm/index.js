import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function LugarInicial(props) {
    return(
        <Container>
            <Link to={{
                    pathname: '/admInserir'
                }}>
                <button className="botao-editar">
                    <img className="img-bt-editar" src={"../../assets/images/Group 21.png"} alt="" />
                </button>
            </Link>
           <div className="bloco-lugar">
            <img className="img-turismo" src={props.lugares.imagem} alt="" />
                <Link to={{
                    pathname: "/infoLugar",
                    state: props.lugares
                }}>
                    <button className="nm-lugar">{props.lugares.nome}</button>
                </Link>
           </div>
        </Container>
    )
}