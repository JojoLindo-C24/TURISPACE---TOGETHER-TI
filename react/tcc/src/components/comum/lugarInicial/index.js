import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function LugarInicial(props) {
    return(
        <Container>
            <img className="img-turismo" src={props.lugares.ds_imagem} alt="" />
            <Link to={{
                pathname: "/infoLugar",
                state: props.lugares
            }}>
                <button className="nm-lugar">{props.lugares.nm_lugar}</button>
            </Link>
        </Container>
    )
}