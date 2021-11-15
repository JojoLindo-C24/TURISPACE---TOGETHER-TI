import {MinhaConta} from "./styled";

import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import {IndexRodape} from '../../components/comum/rodape';
  
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import { useState , useEffect } from "react"; 
import Loadingbar from 'react-top-loading-bar' 

import Api from "../../service/api";

const api = new Api();


function LerCookiesUsuario(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function Index(){
    const navigation = useHistory();
    
    let usuarioLogado = LerCookiesUsuario(navigation);

    const [usu, setUsu] = useState([]);
    const [nome, setNome] = useState(usuarioLogado.nm_usuario);
    const [celular, setCelular] = useState(usuarioLogado.nr_celular);
    const [senha, setSenha] = useState(usuarioLogado.ds_senha);
    const [email, setEmail] = useState(usuarioLogado.ds_email);

    useEffect (() => {
        ListarLogado();
    }, [])

    const logoff = () => {
        Cookies.remove('usuario-logado');
        navigation.push('/')
    }

    async function Alterar(id) {
        let t = await api.infoUsuario(id, nome, email, senha, celular)
        if(t.erro){
            alert.error('Ocorreu um erro');
        } else {
            alert('Deu certo?');
        }
    }

    const ListarLogado = async () => {
        let usuarioLogado = await api.login();
        setUsu(usuarioLogado);
    }

    if(usuarioLogado == null)
        navigation.push('/');

    return (
        <MinhaConta>
            <CabecalhoInDark></CabecalhoInDark>
            <div className= "Container">
                <div className= "conteudo-MC">
                    <div className= "conteudo-MI">
                        <div className="titulo">
                            <div className= "f1-titulo">   Minhas Informações </div>
                            <div className="line-content"></div>
                        </div>
                        <div className= "informacoes">
                            <input className= "input-nome" value={nome} type= "text" placeholder= "Nome:"/> 
                            <input className= "input-celular" value={celular} type= "text" placeholder= "Celular:"/> 
                            <input className= "input-CPF" value={senha} type= "text" placeholder= "Senha:"/>
                            <input className= "input-email" value={email} type= "text" placeholder= "Email:"/>
                        </div>
                        <div className= "botoes">
                            <button onClick={Alterar(usu.id_usuario)} className="alterar"> Alterar informações </button>
                            {/* <button className="pacotes"> Ver meus pacotes </button> */}
                            <button onClick={logoff} className="trocar"> Trocar de Conta</button>
                        </div>
                    </div>
                </div>
                

            </div>
            <IndexRodape></IndexRodape>

        </MinhaConta>
    )
}