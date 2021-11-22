import styled from "styled-components";

const CabecalhoAdm = styled.div`
 background: #1A446D;
    width:100%;
    height: 10vw;
    
.f1-Cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.botao-cabecalho{
    border: none;
    background-color: transparent;
    font: 30px Montserrat-Medium;
    cursor: pointer;
    color: white;
}

.botao-cabecalho:hover{
    text-decoration: underline;
}
`
export {CabecalhoAdm}