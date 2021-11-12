import { FaleConosco } from "./styled";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import { IndexRodape } from "../../components/comum/rodape/index";
// import Mapa  from "../../components/comum/google_maps";


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
                        {/* <Mapa></Mapa> */}
                        <div className= "cel"> +55 (11) 95247-9539</div>
                        <div className="email"> turiSPace@gmail.com </div>
                    </div>
                    <div className= "Parte2">
                        <div className= "label">Nome:</div>
                        <input type="text"/>
                        <div className= "label"> Sua mensagem: </div>
                        <textarea/>
                        <div className="botao">
                           <button className= "botao-enviar"> Enviar </button> 
                        </div>
                    </div>
               </div>
            </div>
            <IndexRodape></IndexRodape>
        </FaleConosco>
        
    )
}
