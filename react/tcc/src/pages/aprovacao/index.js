import React from 'react';
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';

import * as C from './styled.js';

function AprovacaoCompra() {
  return(
    <C.Container> 
       <CabecalhoAdm></CabecalhoAdm>
       <div className="Container">
         <div className="Conteudo">
        <div className="Box-Titulo"><img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> Aprovação das Compras </div>
        <div className="tabela">
        <table class ="table-user">
                    <table class ="table-user">
                    <tbody>
                        <tr >
                            <td> </td>
                            <td> Nome Completo </td>
                            <td> Valor da Compra </td>
                            <td> Status Pgto </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                            <td> Joelma Marins do Santos </td>
                            <td>  R$ 110,0 </td>
                            <td> Pago </td>
                            <td><button>Liberar</button></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr>
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                        <td> Joelma Marins do Santos </td>
                            <td>  R$ 110,0 </td>
                            <td> Pago </td>
                            <td><button>Liberar</button></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                        <td> <img src="assets/images/Ellipse100.png" alt="" /> </td>
                        <td> Joelma Marins do Santos </td>
                            <td>  R$ 110,0 </td>
                            <td> Pago </td>
                            <td><button>Liberar</button></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    </tbody> 

                </table>
                </table>
              </div>
      </div>
    </div>
    </C.Container>
  )
};

export default AprovacaoCompra;