import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${'/assets/images/BackgroundTicket.png'});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.conteudo{
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

.cabecalho-login{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon-login {
    width: 100px;
    height: auto;
    margin-right: 35px;
}

.login{
    font: 52px Roboto-Thin;
    color: white;
}

.linha-email{
    width: 600px;
    height: 1px;
    background-color: white;
}

.linha-senha{
    width: 300px;
    height: 1px;
    background-color: white;
}

.input-email{
    background-color: transparent;
    border: none;
    width: 600px;
    margin-top: 30px;
    font: 22px Roboto-Light;
    color: white;
    margin-bottom: 10px;
    cursor: text;
    outline: none;
}

.input-senha{
    background-color: transparent;
    border: none;
    width: 300px;
    margin-top: 50px;
    font: 22px Roboto-Light;
    color: white;
    margin-bottom: 10px;
    cursor: text;
    outline: none;
}

.esqueceu-senha{
    font: 12px Roboto-Thin;
    color: white;
    margin-top: 15px;
    cursor: pointer;
    text-decoration: none;
}


.botao-logar{
    border-radius: 20px;
    background-color:  transparent;
    padding: 0.5em 2em 0.5em 2em;
    font: 24px Roboto-Thin;
    color: white;
    border: 2px solid white;
    cursor: pointer;
}

.botao-logar:hover{
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
}

.f1-conteudo{
    display: flex;
    flex-direction: column;
    
}
`
export {Container}