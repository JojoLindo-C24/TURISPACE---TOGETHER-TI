import { Link } from "react-router-dom";

import { Container } from "./styled";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useHistory } from 'react-router'

import Cookies from 'js-cookie'

import Api from '../../service/api'
const api = new Api();


export default function Index() {

    const [emailAdm, setEmail] = useState('');
    const [senhaAdm, setSenha] = useState('');

    const navigation = useHistory();

    const logarAdm = async () => {
        let t = await api.loginAdm(emailAdm, senhaAdm);
        if(t.erro) {
            toast(`${t.erro}`)
        } else {
            Cookies.set('Adm-logado', JSON.stringify(t));
            navigation.push('/InicialAdm')
        }
    }

    return(
            <Container>
                 <ToastContainer />
                <div class="conteudo">
                    <div className="f1-conteudo">
                        <div class="cabecalho-login">
                            <img src={'../../assets/images/icon-login.svg'} alt="" class="icon-login"/>
                            <div class="login">Login Administrativo</div>
                        </div>
                        <input class="input-email" value={emailAdm} onChange={e => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail"/>
                        <div class="linha-email"></div>
                        <input class="input-senha" value={senhaAdm} onChange={e => setSenha(e.target.value)} type="text" placeholder="Digite sua senha"/>
                        <div class="linha-senha"></div>
                        <Link to={{
                            pathname: '/esqueceuSenhaAdm'
                        }}>
                            <a className="esqueceu-senha" href="http://127.0.0.1:5500/html/esqueceu%20_senha/index.html">Esqueceu sua senha?</a>
                        </Link>
                    </div>
                        <Link to={{
                            pathname: '/inicialAdm'
                        }}>
                            <button onClick={logarAdm}class="botao-logar">Entrar</button>
                        </Link> 
                </div>
        </Container>
    )
}