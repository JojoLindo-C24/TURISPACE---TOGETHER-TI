import { SobreNos } from "./styled";
import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import {IndexRodape} from '../../components/comum/rodape';


export default function index(){
    return (
        <SobreNos>
            <CabecalhoInDark></CabecalhoInDark>
            <div class= "Conatiner"> 
                <div className= "Titulo"> Sobre Nós </div>
                
            </div>
            <IndexRodape></IndexRodape>

        </SobreNos>
    )
}