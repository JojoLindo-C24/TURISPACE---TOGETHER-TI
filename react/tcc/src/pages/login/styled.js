import styled from 'styled-components'

const Login = styled.div`
    margin-left: 95px;
    margin-top: 75px;
    width: 1100px;
    height: 460px;
    background-color: rgba(4, 30, 57, 0.91);
    border: 5px solid #003974;

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
    font: 56px Roboto;
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
    font: 22px Roboto;
    color: white;
    margin-bottom: 10px;
}

.input-senha{
    background-color: transparent;
    border: none;
    width: 300px;
    margin-left: 200px;
    margin-top: 50px;
    font: 22px Roboto;
    color: white;
    margin-bottom: 10px;
}

.esqueceu-senha{
    font: 14px Roboto;
    color: white;
    margin-left: 200px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
}

.botao-logar{
    border-radius: 20px;
    background-color:  rgba(119, 119, 119, 0.7);
    border: none;
    padding: 0.5em 2em 0.5em 2em;
    font: 24px Roboto;
    color: white;
    margin-left: 700px;
}
`
export {Login};