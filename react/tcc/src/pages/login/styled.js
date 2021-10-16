import styled from 'styled-components'

const Login = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${'/assets/images/sao_paulo1.png'});
    background-repeat: no-repeat;
    background-size: cover;

.f1-container{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 95vh;
    margin: 20px;
    border: 5px solid #041E39;
    box-sizing: border-box;
    border-radius: 26px;
    margin-left: 35px;
    background: rgba(196, 196, 196, 0.01);
}

.conteudo{
    width: 1100px;
    height: 460px;
    background-color: rgba(4, 30, 57, 0.91);
    border: 5px solid #003974;
}

.cabecalho-login{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 200px;
    margin-top: 60px;
}

.icon-login {
    width: 100px;
    height: auto;
    margin-right: 35px;
}

.login{
    font: 56px Roboto-Thin;
    color: white;
}

.linha-email{
    width: 600px;
    height: 1px;
    background-color: white;
    margin-left: 200px;
}

.linha-senha{
    width: 300px;
    height: 1px;
    background-color: white;
    margin-left: 200px;
}

.input-email{
    background-color: transparent;
    border: none;
    width: 600px;
    margin-left: 200px;
    margin-top: 30px;
    font: 22px Roboto-Light;
    color: white;
    margin-bottom: 10px;
    cursor: text;
}

.input-senha{
    background-color: transparent;
    border: none;
    width: 300px;
    margin-left: 200px;
    margin-top: 50px;
    font: 22px Roboto-Light;
    color: white;
    margin-bottom: 10px;
    cursor: text;
}

.esqueceu-senha{
    font: 14px Roboto-Light;
    color: white;
    margin-left: 200px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.botao-logar{
    border-radius: 20px;
    background-color:  transparent;
    padding: 0.5em 2em 0.5em 2em;
    font: 24px Roboto-Thin;
    color: white;
    margin-left: 700px;
    border: 2px solid white;
}
`
export {Login};