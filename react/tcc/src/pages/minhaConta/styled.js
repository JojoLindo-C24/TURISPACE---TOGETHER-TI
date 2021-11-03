import styled from "styled-components";

const MinhaConta = styled.div`
    background-image: url(${'/assets/images/fundoMinhaConta.png'});
    
    

.Container{
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.conteudo-MC{
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
    width: 80em;
}

.line-content{
    
    background-color: white;
    height: 7px;
    width: 35%;
}

.conteudo-MI{
    display:flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.informacoes{
    padding: 2.5em;
  
   
}

input  {
    background-color: rgba(0, 5, 9, 0.85);
    border: 1px solid ;
    display: flex;
    width: 30em;
    height:3em;
}
.alterar {
    display: flex;
    justify-content: center;
    align-items: center;
     flex-wrap: wrap;
     width: 15vw;
     font-size: 14px;
    background-color: rgba(0, 5, 9, 0.85);
    border: 1px solid black;
    color:white; 
    border-radius: 7px;
    cursor: pointer;

}



.pacotes{
    display: flex;
    justify-content: center; 
     flex-wrap: wrap;
     width: 15vw;
     font-size: 14px;
    background-color: rgba(0, 5, 9, 0.85);
    border: 1px solid black;
    color:white; 
    border-radius: 7px;
    cursor: pointer;
}

.trocar{
    display: flex;
    justify-content: center;
    width: 15vw;
     font-size: 14px;
     flex-wrap: wrap;
    background-color: rgba(0, 5, 9, 0.85);
    border: 1px solid black;
    color:white; 
    border-radius: 7px;
    cursor: pointer;
}


.titulo{
   font-size: 40px;
   color:white;

}


`
export {MinhaConta};