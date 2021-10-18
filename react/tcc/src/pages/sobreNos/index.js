import { SobreNos } from "./styled";
import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import {IndexRodape} from '../../components/comum/rodape';


export default function index(){
    return (
        <SobreNos>
            <CabecalhoInDark></CabecalhoInDark>
            <div class= "Conatiner"> 
                <div className= "Titulo"> Sobre Nós </div>
                <div className= "Conteuodo-1"> Nossa empresa tem o objetivo de indicar e mostrar os<br></br> melhores locais para conhecer em São paulo. Trabalhamos<br></br> em pesquisas diarias,  com conforto, segurança e o melhor<br></br> aproveitamento do seu dinheiro. </div>
                <div className= "Conteuodo-2">
                    <div className= "titulo-C2"> QUEM SOMOS </div>
                    <div className="info">
                        <div className= "Nomes"> Luciane Costa Xavier<br></br> Letícia Santos Rocha<br></br>Jonathan Fernando Costa<br></br>Karoline Sampaio Silva<br></br>Otávio Augusto Reis   </div> 
                        <div className= "Parcerias"> 
                            <div className = "Tusispace"> <img class ="turispce" src={"./assets/images/TURISPACE.png"} alt=""></img> </div>
                            <div className = "TogetherTI"> <img class ="turispce" src={"./assets/images/togetherTI.png"} alt=""></img> </div>
                        </div>
                    </div> 
                </div>
                <button className= "voltar">  </button>

            </div>
            <IndexRodape></IndexRodape>

        </SobreNos>
    )
}