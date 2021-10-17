import { FaleConosco } from "./styled";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import { IndexRodape } from "../../components/comum/rodape/index";


export default function Index() {
    return(
        <FaleConosco>
            <CabecalhoInWhite></CabecalhoInWhite>
            <div class="Container">
               <div className= "Titulo"> Fale Conosco</div>
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
                        <input class="input-mensagem" type="textearea" placeholder="Insira sua mensagem"/>
                        <button className= "botao-enviar"> Enviar </button> 
                    </div>
               </div>
            </div>
            <IndexRodape></IndexRodape>
        </FaleConosco>
        
    )
}
