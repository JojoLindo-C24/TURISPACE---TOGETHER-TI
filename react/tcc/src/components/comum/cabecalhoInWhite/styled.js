import styled from "styled-components";

const CabecalhoInWhite = styled.div`
    justify-content: center;
    width: 100%;

.f1-Cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.botao-cabecalho{
    border: none;
    background-color: transparent;
    font: 26px Montserrat-Medium;
    cursor: pointer;
    color: white;
}

.botao-cabecalho:hover{
    text-decoration: underline;
}
`
export {CabecalhoInWhite}