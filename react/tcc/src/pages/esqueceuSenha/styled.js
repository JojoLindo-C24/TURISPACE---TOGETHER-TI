import styled from "styled-components";

const EsqueceuSenha = styled.div`
    justify-content: center;
    margin-left: 50px;

.cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 300px;
}

.logo-usuario{
    width: 100px;
    height: 100px;
    margin-top: 130px ;
}

.esqueceu-senha{
    font: 42px Roboto-Thin;
    color: white;
    margin-left: 35px;
    margin-top: 130px ;
}

.linha-email{
    width: 600px;
    height: 1px;
    background-color: white;
    margin-left: 300px;
}

.input-email{
    border: none;
    background-color: transparent;
    font: 22px Roboto-Light;
    color: white;
    margin-left: 300px;
    margin-top: 50px;
}

.botao-esqueceu-senha{
    background-color: transparent;
    border: 2px solid white;
    border-radius: 18px;
    font: 24px Roboto-Thin;
    color: white;
    padding: 10px 40px 10px 40px;
    margin-left: 550px;
    margin-top: 100px;
    cursor: pointer;
}
`
export {EsqueceuSenha};