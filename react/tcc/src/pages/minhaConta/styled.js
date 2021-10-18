import styled from "styled-components";

const MinhaConta = styled.div`
    background-image: url(${'/assets/images/fundoMinhaConta.png'});
    color: white;
.Container{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.conteudo-MC{
    width: 95vw;
    height: 95vh;
    border: 3px solid rgba(15, 109, 210, 0.8);
    border-radius: 15px;

}



.coluna-1{
     display: column;
}

.titulo{
    
}
.informacoes{
    display: column;
}
`
export {MinhaConta};