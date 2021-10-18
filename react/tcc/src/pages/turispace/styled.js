import styled from "styled-components";

import BackgroundInitial from "../../assets/images/Inicial-background.png"

const Container = styled.div`
    width: 97vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.container1{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${BackgroundInitial});
  align-items: center;
}

.bt-listar{
    border: none;
    background-color: #c4c4c4;
    font: 22px Roboto-Light;
    color: white;
    border-radius: 17px;
    padding: 1em;   
}

.lista-produtos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

.coluna1{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 4em;
}

.bloco1{
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
    margin: 20px;
}
.imagem{
    height: 300px;
    width: 220px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 0px 0px 20px;
}
.conteudo{
    display: flex;
    flex-direction: column;
    align-items: right;
    padding: 2em 0em 2em 2em;
}
.titulo{
    font: 700 38px OpenSans-Bold;
    color: white;
}
.componentes{
    font: 400 24px Roboto-Light;
    color: white;
}
.preco{
    font: 400 26px Roboto;
    color: white;
    font-weight: bold;
    margin-right: 20px;
    margin-top: 7px;
}

.mais-info{
    border: none;
    border-radius: 7px;
    font: 400 22px Roboto-Thin;
    color: white;
    background-color: transparent;
    cursor: pointer;
}
.mais-info:hover{
    text-decoration: underline;
}

.top-cont{
    display: flex;
    flex-direction: column;
}

.middle-cont{
    display: flex;
    flex-direction: row;
    align-items: right;
}

.bt-compra{
    border-radius: 10px 0px 0px 10px;
    background-color: rgba(196, 196, 196, 0.25);
    padding: 0.5em 1em 0.5em 1em;
    cursor: pointer;
    border: none;
}

.img-compra{
    height: 30px;
    width: auto;
    margin: 0px 10px 0px 10px;
}

.linha-top-cont{
    display: flex;
    flex-direction: row;
}

.linha-cont{
    background-color: white;
    width: 7px;
    height: auto;
    border-radius: 5px;
    margin-right: 10px;
}

.Turispace{
    margin-right: 80px;
}

.Turispace-subtitulo{
    font: 38px Montserrat-SemiBold;
    color:  #17324A;
    text-align: center;
    margin: 20px;
}

.Turispace-promocoes{
    font: 40px Montserrat-SemiBold;
    color: white;
    background-color: rgba(0, 5, 32, 0.85);
    width: 100vw;
    padding: 1em 0em 1em 0em;
    text-align: center;
}

.container2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: url(${'/assets/images/saopaulo.png'});
    align-items: center;
}

.lugaresInicial{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.bloco2{
    display: flex;
    flex-direction: column;
    background: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
    align-items: center;
    border: none;
    cursor: pointer;
    margin-top: 5em;
    margin-bottom: 2em;
}

.img-turismo{
    width: 360px;
    height: 360px;
}

.nm-lugar{
    padding: 1em;
    font: 22px Rosario-SemiBold;
    color: white;
    border: none;
    cursor: pointer;
    background-color: transparent;
}
`
export {Container}