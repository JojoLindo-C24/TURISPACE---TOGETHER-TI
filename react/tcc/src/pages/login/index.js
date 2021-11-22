import { Link } from 'react-router-dom'

import {Login} from './styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useHistory } from 'react-router'

import Cookies from 'js-cookie';

import Api from '../../service/api'
const api = new Api();

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useHistory();

    const logar = async () => {
        let t = await api.login(email, senha);
        if(t.erro) {
            toast(`${t.erro}`)
        } else {
            Cookies.set('usuario-logado', JSON.stringify(t));
            navigation.push('/inicial')
        }
    }

    return(
            <Login>
                 <ToastContainer />
            
                <div class="f1-container">
                    <div class="conteudo">
                        <div className="f1-conteudo">
                            <div class="cabecalho-login">
                                <img src={'../../assets/images/icon-login.svg'} alt="" class="icon-login"/>
                                <div class="login">Login</div>
                            </div>
                            <input class="input-email" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail"/>
                            <div class="linha-email"></div>
                            <input class="input-senha" value={senha} onChange={e => setSenha(e.target.value)} type="password" placeholder="Digite sua senha"/>
                            <div class="linha-senha"></div>
                            <Link to={{
                                pathname: '/esqueceuSenha'
                            }}>
                                <a className="esqueceu-senha" href="http://127.0.0.1:5500/html/esqueceu%20_senha/index.html">Esqueceu sua senha?</a>
                            </Link>
                        </div>
                            {/* <Link to={{
                                pathname: '/inicial'
                            }}> */}
                                <button onClick={logar} class="botao-logar">Entrar</button>
                            {/* </Link>  */}
                    </div>
                </div>
            </Login>
    )
}