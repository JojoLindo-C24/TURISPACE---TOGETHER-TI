import {BoxAvaliacao} from "./styled";
import Api from '../../../service/api';

import LoadingBar from 'react-top-loading-bar';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useRef } from "react";
const api = new Api();



export default function Index(){
    const [idMensagem, setChat] = useState([]);
    const loading = useRef(null);
    
    const validarResposta = (resp) => {
        //console.log(resp);

        if (!resp.erro)
            return true;
        toast.error(`${resp.erro}`);
        return false;
    }

    const carregarMensagens = async () => {
            loading.current.continuousStart();

        const mensagens = await api.listarMensagens(idMensagem);
        if (validarResposta(mensagens))
            setChat(mensagens);

            loading.current.complete();
        
    

        // loading.current.complete();
    }


    return (
        <BoxAvaliacao>
            <button onClik= {carregarMensagens} className="carregar"> carregar </button>
            <div className="tabela">
                <div className="container">
                    <div className="chat">
                        {(x =>
                        <div key={x.infoc_tht_chat.id_mensagem}>
                            <div className="chat-mensagem">
                                <div>{x.nm_nome}</div>
                                <div> {x.ds_mensagem}</div>
                            </div>
                            <div> ({new Date(x.dt_mensagem.replace('Z', '')).toLocaleTimeString()})/</div>
                        </div>
                        )}
                    </div>
                    {/* <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div>
                    <div className="box">
                        <div className="box-mensagem">
                            <div className= "nome">Joelma Marins do Santos</div>
                            <div className="mensagem">Otimo atendimento, Parabéns!!</div>
                        </div>
                        <div className="data">24/09/2021</div>
                    </div> */}
                </div>
            </div>
        </BoxAvaliacao>
    )
}