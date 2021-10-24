import styled from "styled-components";

const MinhaConta = styled.div`
    background-image: url(${'/assets/images/fundoMinhaConta.png'});
    color: white;
.Container{
   
    display: flex;
    justify-content: center;
    
}

.conteudo-MC{
    width: 95vw;
    height: 100vh;
    margin:40px;
    border: 3px solid rgba(15, 109, 210, 0.8);
    border-radius: 15px;
    display: flex;
}



.coluna-1{
    
    justify-content: center;
}

.informacoes{
    
    
    
}

input  {
    
    width: 80vh;
    background-color: rgba(0, 5, 9, 0.23);
    border: 1px solid ;
    padding :10px 10px ;
    border-radius: 7px;
    cursor: Text;
}

button{
    background-color: rgba(0, 5, 9, 0.85);
    border: 1px solid black;
    color:white;
    width: 17vw;
    height: 4vw;
    font-size: 19px;
    border-radius: 7px;
    cursor: pointer;

}

.titulo{
    font-size: 40px;

}

.coluna2{
   

}


`
export {MinhaConta};