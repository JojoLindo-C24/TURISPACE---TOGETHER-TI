import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/turispace';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueceuSenha" exact={true} component={EsqueceuSenha} />
            </Switch>
        </BrowserRouter>
    )
}