import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/turispace';
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import Codigo from './pages/codigo';
import Cadastro from './pages/cadastro'
import SenhaNova from './pages/senhaNova';
import SobreNos from './pages/sobreNos';
import FaleConosco from './pages/faleConosco';
import MinhaConta from './pages/minhaConta';
import TicketCompra from './pages/ticketCompra';
import Error from './pages/errorPage';
import InfoPacote from './pages/infoPacote';
import AdmMensagens  from './pages/admMensagens';
import MinhaSacola from './pages/minhaSacola';
import AprovacaoCompra from './pages/aprovacao';
import GerenUsuario from './pages/admGerenUsuario';
import Pagamento from './pages/pagamento';
import LoginAdm from './pages/admLogin'
import EsqueceuSenhaAdm from './pages/admEsqueceuSenha';
import InicialAdm from './pages/admInicial';
import Lugares from './pages/lugares';


import Teste from './components/comum/cabecalhoInWhite'
import Teste2 from './components/comum/cabecalhoInDark'
// import Teste3 from './components/comum/SetPromTemp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Cadastro} />
                <Route path="/inicial" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueceuSenha" exact={true} component={EsqueceuSenha} />
                <Route path="/codigo" exact={true} component={Codigo} />
                <Route path="/novaSenha" exact={true} component={SenhaNova} />
                <Route path="/faleConosco" exact={true} component={FaleConosco} />
                <Route path= "/sobreNos" exact={true} component = {SobreNos} />
                <Route path= "/minhaConta" exact={true} component = {MinhaConta} />
                <Route path="/ticketCompra" exact={true} component={TicketCompra} />
                <Route path="/infoPacote" exact={true} component={InfoPacote} />
                <Route path="/admMensagens" exact={true} component= {AdmMensagens}/>
                <Route path="/minhaSacola" exact={true} component= {MinhaSacola}/>
                <Route path="/aprovacao" exact={true} component={AprovacaoCompra} />
                <Route path="/gerenciamentoUsuario" exact={true} component={GerenUsuario} />
                <Route path="/loginAdm" exact={true} component={LoginAdm} />
                <Route path="/pagamento" exact={true} component={Pagamento} />
                <Route path="/EsqueceuSenhaAdm" exact={true} component={EsqueceuSenhaAdm} />
                <Route path="/InicialAdm" exact={true} component={InicialAdm} />        
                <Route path="/lugares" exact={true} component={Lugares} />          
                <Route path="/error" exact={true} component={Error} />
                <Route path="/teste" exact={true} component={Teste} />
                <Route path="/teste2" exact={true} component={Teste2} />
                {/* <Route path="/teste3" exact={true} component={Teste3} /> */}
            </Switch>
        </BrowserRouter>
    )
}