import React from 'react';
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';
import BotaoVoltar from '../../components/comum/botaoVoltar';

import * as C from './styled.js';

function CadastroAdm() {
  return(
    <C.Container> 
      <CabecalhoAdm></CabecalhoAdm>
        <div className="Container">
         <div className="Conteudo">
        <div className="Box-Titulo"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> Contas Cadastradas</div>
        <div className="tabela">
        <table class ="table-user">
                    <table class ="table-user">
                    <tbody>
                        <tr >
                            <td> </td>
                            <td> Nome Completo </td>
                            <td> Celular </td>
                            <td> Email </td>
                            <td > Mais Informações </td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                            <td> Joelma Marins do Santos </td>
                            <td> (11) 99254-7851 </td>
                            <td> joelma.marins@outlook.com </td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr>
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                            <td> Joelma Marins do Santos </td>
                            <td> (11) 99254-7851 </td>
                            <td> joelma.marins@outlook.com </td>
                            <td> </td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                            <td> Joelma Marins do Santos </td>
                            <td> (11) 99254-7851 </td>
                            <td> joelma.marins@outlook.com </td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    </tbody> 

                </table>
                </table>
              </div>
      </div>
    </div>
    <BotaoVoltar/>
    </C.Container>
  )
};

export default CadastroAdm;