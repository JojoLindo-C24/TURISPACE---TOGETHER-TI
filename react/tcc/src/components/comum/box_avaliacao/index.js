import {BoxAvaliacao} from "./styled";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

import Api from '../../../service/api';
const api = new Api();



export default function Index(props){
    const [mensagem, setMensagem] = useState(props.itemMsg);

    return (
        <BoxAvaliacao>
                <div className="container">
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">{props.itemMsg.nm_nome}</div>
                            <div className="mensagem">{props.itemMsg.ds_mensagem}</div>
                        </div>
                        <div className="data">{props.itemMsg.dt_mensagem}</div>
                    </div>
                </div>
        </BoxAvaliacao>
    )
}