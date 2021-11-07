import { AdmMensagens} from "./styled";
import BotaoVoltar from "../../components/comum/botaoVoltar";
import  BoxAvaliacao  from "../../components/comum/box_avaliacao";



export default function Index(){
    return (
    <AdmMensagens>
         <div className="Container">
            <div className="conteudo"> 
                <div className="titulo">
                    <div className="barrinha"> <img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> </div>
                    <div className="nomeAvaliacao">Avaliações do Site </div>
                </div>
                <BoxAvaliacao></BoxAvaliacao>
            </div>
         </div>
        <BotaoVoltar></BotaoVoltar>
    </AdmMensagens>
)
}