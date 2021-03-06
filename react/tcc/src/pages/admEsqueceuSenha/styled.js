import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${'../../assets/images/BackgroundTicket.png'});
    height: 100vh;
    width: 100vw;

.f1-container{
    width: 80vw;
    height: 80vh;
    background-color: rgba(0, 5, 9, 0.9);
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
}

.cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo-usuario{
    width: 100px;
    height: 100px;
}

.esqueceu-senha{
    font: 42px Roboto-Thin;
    color: white;
    margin-left: 35px;
}

.email{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.linha-email{
    width: 600px;
    height: 1px;
    background-color: white;
}

.input-email{
    border: none;
    background-color: transparent;
    font: 22px Roboto-Light;
    color: white;
    margin-top: 50px;
    outline: none;
}

.botao-esqueceu-senha{
    background-color: transparent;
    border: 2px solid white;
    border-radius: 18px;
    font: 24px Roboto-Thin;
    color: white;
    padding: 10px 40px 10px 40px;
    margin-top: 100px;
    cursor: pointer;
}

.botao-esqueceu-senha:hover{
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
}

`
export {Container};