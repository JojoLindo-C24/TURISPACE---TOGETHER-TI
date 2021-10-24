import {MinhaConta} from "./styled";
import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import {IndexRodape} from '../../components/comum/rodape';


export default function index(){
    return (
        <MinhaConta>
            <CabecalhoInDark></CabecalhoInDark>
            <div className= "Container">
                <div className= "conteudo-MC">
                    <div className= "coluna-1">
                        <div className= "titulo"> <img class="tracinho" src={"../../assets/images/tracinho.png"} alt=""/>   Minhas Informações </div>
                        <div className= "informacoes">
                            <input className= "input-nome" type= "text" placeholder= "Nome:"/> 
                            <input className= "input-celular" type= "text" placeholder= "Celular:"/> 
                            <input className= "input-CPF" type= "text" placeholder= "CPF:"/>
                            <input className= "input-email" type= "text" placeholder= "Email:"/>
                        </div>
                        <div className= "botoes-1">
                            <button className="alterar"> Alterar informações </button>
                            <button className="pacotes"> Ver meus pacotes </button>
                        </div>
                    </div>
                    <div className= "coluna-2">
                        <div className="botoes-conta">
                        <button className="Cancelar"> Cancelar </button>
                        <button className="trocar"> Trocar de Conta </button>
                        <button className="excluir"> Excluir dados  </button>
                        </div>

                    </div>
                </div>
                

            </div>
            <IndexRodape></IndexRodape>

        </MinhaConta>
    )
}