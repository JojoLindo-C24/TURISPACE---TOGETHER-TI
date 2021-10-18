import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/turispace';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import Codigo from './pages/codigo';
import Cadastro from './pages/cadastro'
import DetalhePacotes from "./pages/infoPacote"
import SenhaNova from './pages/senhaNova';
import SobreNos from './pages/sobreNos';
import FaleConosco from './pages/faleConosco';
import MinhaConta from './pages/minhaConta'


import Teste from './components/comum/cabecalhoInWhite'
import Teste2 from './components/comum/cabecalhoInDark'
// import Teste3 from './components/comum/SetPromTemp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueceuSenha" exact={true} component={EsqueceuSenha} />
                <Route path="/codigo" exact={true} component={Codigo} />
                <Route path="/cadastrar" exact={true} component={Cadastro} />
                <Route path="/detalhePacote" exact={true} component={DetalhePacotes} />
                <Route path="/novaSenha" exact={true} component={SenhaNova} />
                <Route path="/faleConosco" exact={true} component={FaleConosco} />
                <Route path= "/sobreNos" exact={true} component = {SobreNos} />
                <Route path= "/minhaConta" exact={true} component = {MinhaConta} />
                <Route path="/teste" exact={true} component={Teste} />
                <Route path="/teste2" exact={true} component={Teste2} />
                {/* <Route path="/teste3" exact={true} component={Teste3} /> */}
            </Switch>
        </BrowserRouter>
    )
}