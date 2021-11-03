import {MinhaConta} from "./styled";
import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import {IndexRodape} from '../../components/comum/rodape';


export default function index(){
    return (
        <MinhaConta>
            <CabecalhoInDark></CabecalhoInDark>
            <div className= "Container">
                <div className= "conteudo-MC">
                    <div className= "conteudo-MI">
                        <div className= "titulo">   Minhas Informações </div>
                        <div className="line-content"></div>
                        <div className= "informacoes">
                            <input className= "input-nome" type= "text" placeholder= "Nome:"/> 
                            <input className= "input-celular" type= "text" placeholder= "Celular:"/> 
                            <input className= "input-CPF" type= "text" placeholder= "CPF:"/>
                            <input className= "input-email" type= "text" placeholder= "Email:"/>
                        </div>
                        <div className= "botoes">
                            <button className="alterar"> Alterar informações </button>
                            <button className="pacotes"> Ver meus pacotes </button>
                            <button className="trocar"> Trocar de Conta</button>
                        </div>
                    </div>
                </div>
                

            </div>
            <IndexRodape></IndexRodape>

        </MinhaConta>
    )
}