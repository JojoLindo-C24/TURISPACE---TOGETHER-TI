import { FaleConosco } from "./styled";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import { IndexRodape } from "../../components/comum/rodape/index";


export default function Index() {
    return(
        <FaleConosco>
            <CabecalhoInWhite></CabecalhoInWhite>
            <div className="Container">
               <div className= "Titulo"> 
                    <div className= "faleConosco"> Fale Conosco</div>
               </div>
               <div className= "conteudo">
                    <div className= "Parte1">
                        <div className= "mapa"> <img class ="mapa" src={"./assets/images/mapa.png"} alt="" ></img></div>
                        <div className= "cel"> +55 (11) 95247-9539</div>
                        <div className="email"> turiSPace@gmail.com </div>
                    </div>
                    <div className= "Parte2">
                        <div className= "label">Nome:</div>
                        <input class="input-nome" type="text"/>
                        <div className= "label"> Sua mensagem: </div>
                        <input class="input-mensagem" type="text"/>
                        <div className="botao">
                           <button className= "botao-enviar"> Enviar </button> 
                        </div>
                    </div>
               </div>
               <IndexRodape></IndexRodape>
            </div>
           
        </FaleConosco>
        
    )
}
