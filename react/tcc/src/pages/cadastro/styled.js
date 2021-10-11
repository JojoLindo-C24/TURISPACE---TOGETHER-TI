import styled from "styled-components";

const Cadastro = styled.div`
.Container{
    height: 100vh;
    width: 100vh;
    background-image: url(${'/assets/images/construcoes1.png'});
    background-repeat: no-repeat;
    background-size: cover;
}

.f1-container{
    position: absolute;
    width: 93vw;
    height: 95vh;
    margin: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 6px solid rgba(15, 109, 210, 0.8);
    box-sizing: border-box;
    border-radius: 26px;
    margin-left: 35px;
}

.titulo{
    text-align: center;
}

.conteudo{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.conteudo-esquerda{
    background-color:  rgba(4, 30, 57, 0.85);
    height: auto;
    width: 13em;
    padding: 2em 3em 2em 3em;
    width: 562.57px;
    height: 290px;
}

.CE-faixa1 {
    text-align: center;
    font: 500 28px Montserrat-Medium;
    color: white;
    margin-bottom: 20px;
}


.CE-faixa2{
    font: 500 20px Montserrat-Medium;
    color: white;
}

.CE-faixa3{
    font: 24px Rosario-semiBold;
    color: white;
    margin-top: 15px;
}

.CE-imagem{
    background: transparent;
}


.CE-aviao{
    display: flex;
    flex-direction: row;
}

.CE-onibus{
    display: flex;
    flex-direction: row;
}

.CE-carro{
    display: flex;
    flex-direction: row;
}

.CE-pessoa{
    display: flex;
    flex-direction: row;
}

.CE-aviao img{
    width: auto;
    height: 40px;
    margin-left: 15px;
}

.CE-onibus img{
    width: auto;
    height: 50px;
    margin-left: 15px;
}

.CE-carro img{
    width: auto;
    height: 50px;
    margin-left: 15px;
}

.CE-pessoa img{
    width: auto;
    height: 45px;
    margin-left: 15px;
}

.ifen {
    font: 38px Rosario-semiBold;
    margin: 0px;
}


.conteudo-direita{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 290px;
    background-color: rgba(4, 30, 57, 0.85);
    padding: 2em 3em 2em 3em;
    margin: 0px 0px 0px 70px;
}

.logo {
    width: auto;
    height: 185px;
}

.cadastrar{
    font: 34px Rosario-semiBold;
    color: white;
}

.input-email{
    border-style: none;
    border-radius: 4px;
    padding: 1em 1.7em 1em 1.7em;
    margin: 25px 0px 15px 0px;
    font: 16px Rosario;
    color: #777777;
}

.input-senha{
    border-style: none;
    border-radius: 4px;
    padding: 1em 1.7em 1em 1.7em;
    margin: 0px 0px 20px 0px;
    font: 16px Rosario;
    color: #777777;
}

a{
    color: #ffff;
}

.botao-cadastrar{
    font: 22px Rosario-semiBold;
    color: white;
    background: transparent;
    border-radius: 7px;
    border-color: white;
    padding: 0.3em 0.7em 0.3em 0.7em;
    cursor: pointer;
}

.login{
    font: 15px Rosario-semiBold;
    color: white;
    background: transparent;
    border: none;
    margin-top: 10px;
    cursor: pointer;
}
`
export {Cadastro};