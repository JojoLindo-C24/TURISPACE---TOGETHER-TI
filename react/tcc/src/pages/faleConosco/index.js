import { FaleConosco } from "./styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import { IndexRodape } from "../../components/comum/rodape/index";
import Map from "../../components/comum/map/App";
import { useState } from "react";
import Api from '../../service/api';
const api=new Api();



export default function Index() {

    const [nome, setNome] = useState('');
    const [msg, setMsg] = useState('');


    const enviarMensagem = async () => {
        
        
        let t = await api.inserirMensagem(nome, msg);
        if(t.erro){
            toast( '❌ Erro! Preencha os campos ');
        } else {
            toast('💕 Mensagem enviada com sucesso! Obrigada');
        }
        
        
       
        
       
    }

    return(
        <FaleConosco>
            <ToastContainer />
            
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
