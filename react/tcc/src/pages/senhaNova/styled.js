import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

.conteudo{
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
}

.redefinir-senha{
    font: 28px Roboto-Thin;
    color: white;
}

.senha{
    font: 22px Roboto-Thin;
    color: white;
    background-color: transparent;
    border: none;
    margin-top: 50px;
    cursor: text;
}

.linha-senha{
    height: 1px;
    width: 400px;
    background-color: white;
}

.botao-redefinir{
    font: 22px Roboto-Light;
    color: white;
    background-color: transparent;
    border-radius: 12px;
    padding: 0.4em 1em;
    border: 2px solid white;
    margin-top: 40px;
    cursor: pointer;
}

.botao-redefinir:hover{
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
}
`
export {Container};