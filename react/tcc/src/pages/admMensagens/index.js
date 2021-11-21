import { AdmMensagens} from "./styled";
import BotaoVoltar from "../../components/comum/botaoVoltar";
import  BoxAvaliacao  from "../../components/comum/box_avaliacao";
import CabecalhoAdm from "../../components/comum/cabecalhoAdm";
import { useState, useEffect } from "react";
import Api from "../../service/api";
const api = new Api();



export default function Index(){
    const [mensagem, setMensagem] = useState([]);

    async function listarMensagens() {
        let r = await api.listarMensagens();
        setMensagem(r);
    }

    useEffect(() => {
        listarMensagens();
    }, [])

    return (
    <AdmMensagens>
        <CabecalhoAdm />
         <div className="Container">
            <div className="conteudo"> 
                <div className="titulo">
                    <div className="barrinha"> <img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> </div>
                    <div className="nomeAvaliacao">Avaliações do Site </div>
                </div>
                <div className= "box">
                    {mensagem.map(item => 
                        <BoxAvaliacao 
                        key={item.id_mensagem}
                        itemMsg={item} />
                    )}
                </div>
            </div>
         </div>
        <BotaoVoltar></BotaoVoltar>
    </AdmMensagens>
)
}