import styled from 'styled-components'

const Login = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${'/assets/images/sao_paulo1.png'});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.f1-container{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 95vh;
    border: 5px solid #041E39;
    box-sizing: border-box;
    border-radius: 26px;
    background: rgba(196, 196, 196, 0.01);
}

.conteudo{
    width: 85%;
    height: 75%;
    background-color: rgba(4, 30, 57, 0.91);
    border: 5px solid #003974;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    font: 56px Roboto-Thin;
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
export {Login};