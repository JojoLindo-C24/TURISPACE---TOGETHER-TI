import styled from "styled-components";

const Container = styled.div`
    background-image: url(${'/assets/images/BackgroundTicket.png'});
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Tudo{
    width: 80%;
    height: 90vh;
    margin: 3em auto;
    padding: 4em;
    background: rgba(0, 5, 9, 0.85);
    border: 5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 36px;
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

`
export {Container};