import styled from "styled-components";

const CabecalhoInWhite = styled.div`
justify-content: center;
background-color: #c4c4c4; //Só pra aparecer as letras, quando for inserir no site tirar o background-color

.f1-Cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.botao-cabecalho{
    border: none;
    background-color: transparent;
    font: 22px Montserrat-Medium;
    cursor: pointer;
    color: white;
}
`
export {CabecalhoInWhite}