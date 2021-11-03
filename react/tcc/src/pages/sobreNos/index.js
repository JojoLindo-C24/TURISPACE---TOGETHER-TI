import { SobreNos } from "./styled";
import CabecalhoInDark from '../../components/comum/cabecalhoInDark';
import IndexRodape from '../../components/comum/rodape';
import BotaoVoltar from '../../components/comum/botaoVoltar';


export default function index(){
    return (
        <SobreNos>
            <CabecalhoInDark></CabecalhoInDark>
            <div class= "Conatiner"> 
                <div className= "Conteuodo-1">
                    <div className="titulo-C1">Quem Somos ?</div>
                    <div className="line-content"></div>
                    <div className="text">Nossa empresa tem o objetivo de indicar e mostrar os melhores locais para conhecer em São paulo. Trabalhamos em pesquisas diarias,  com conforto, segurança e o melhor aproveitamento do seu dinheiro.</div>
                </div>
                <div className= "Conteuodo-2">
                    <div className= "titulo-C1"> Nossa Equipe </div>
                    <div className="line-content"></div>
                    <div className="info">
                        <div className= "Nomes"> 
                            <p className="nome">Luciane Costa Xavier</p>
                            <p className="nome">Letícia Santos Rocha</p>
                            <p className="nome">Jonathan Fernando Costa Galo</p>
                            <p className="nome">Otávio Augusto Reis </p>
                        </div> 
                        <div className= "Parcerias"> 
                            <div className = "Tusispace"> <img class ="turispce" src={"./assets/images/TURISPACE.png"} alt=""></img> </div>
                            <div className = "TogetherTI"> <img class ="turispce" src={"./assets/images/togetherTI.png"} alt=""></img> </div>
                        </div>
                    </div> 
                </div>
            </div>
            <BotaoVoltar></BotaoVoltar>
            <IndexRodape></IndexRodape>
        </SobreNos>
    )
}