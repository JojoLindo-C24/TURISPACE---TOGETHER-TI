import { FaleConosco } from "./styled";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import { IndexRodape } from "../../components/comum/rodape/index";
import Map from "../../components/comum/map/App";
import { useState } from "react";
import Api from '../../service/api';
const api=new Api();



export default function Index() {

    const [nome, setNome] = useState('');
    const [msg, setMsg] = useState('')

    
    const enviarMensagem = async (event) => {
        if (!(event && event.ctrlKey && event.charCode === 13))
            return;

        const resp = await Api.inserirMensagem(msg);
        
        // if (!validarResposta(resp)) 
        //     return;
        
        // alert ('💕 Mensagem enviada com sucesso!');
       
    }

    return(
        <FaleConosco>
            <CabecalhoInWhite></CabecalhoInWhite>
            <div className="Container">
               <div className= "Titulo"> 
                    <div className= "faleConosco"> Fale Conosco</div>
               </div>
               <div className= "conteudo">
                    <div className= "Parte1">

                        
                        <div className= "cel"> +55 (11) 95247-9539</div>
                        <div className="email"> turiSPace@gmail.com </div>
                        <Map></Map>                          
                   
                    </div>
                    <div className= "Parte2">
                        <div className= "label">Nome:</div>
                        <input value={nome} onChange={e => setNome(e.target.value)} />
                        <div className= "label"> Sua mensagem: </div>
                        <textarea value={msg} onChange={e => setMsg(e.target.value)} />
                        <div className="botao">
                           <button onClick={enviarMensagem} className= "botao-enviar"> Enviar </button> 
                        </div>
                    </div>
               </div>
               
            </div>
            
            <IndexRodape></IndexRodape>

          
        </FaleConosco>
        
    )
}
