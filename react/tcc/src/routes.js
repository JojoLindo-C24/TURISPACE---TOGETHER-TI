import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/turispace';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import Codigo from './pages/codigo';
import Cadastro from './pages/cadastro'

import Teste from './components/comum/cabecalhoInWhite'
import Teste2 from './components/comum/cabecalhoInDark'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueceuSenha" exact={true} component={EsqueceuSenha} />
                <Route path="/codigo" exact={true} component={Codigo} />
                <Route path="/cadastrar" exact={true} component={Cadastro} />
                <Route path="/teste" exact={true} component={Teste} />
                <Route path="/teste2" exact={true} component={Teste2} />
            </Switch>
        </BrowserRouter>
    )
}