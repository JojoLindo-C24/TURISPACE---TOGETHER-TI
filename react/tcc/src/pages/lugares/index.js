import React from 'react';

import * as C from './styled.js';

function Lugares() {
  return(
    <C.Container>
            <div className="Conteudo-f1"> 
                <div className="Title-Sp"> São Paulo </div>
                <div className="Little-Text"> <span> Sabemos que a cidade de São Paulo é um estado com muitos pontos turisticos. Diversas instituições culturais, tradições arquitetônica, predios simbolicos, musues e muito mais. Conheça as melhores indicações dessa grande metrópole: </span> </div>
            </div>
             <div className="Conteudo-f2"> 
                <div className="Options"> <span> Shoppings </span> </div>
         </div>
    </C.Container>
  )
};

export default Lugares;