import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  align-items: center;
  border-radius: 20px;


.bloco{
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
}

.bloco:hover {
    transform: scale(1.1);
    transition: 1s;
}

.imagem{
    height: 230px;
    width: 160px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 0px 0px 20px;
}
.conteudo{
    display: flex;
    flex-direction: column;
    align-items: right;
    padding: 1em 0em 1em 2em;
    justify-content: space-around;
}

.titulo{
    font: 700 26px OpenSans-Bold;
    color: white;
    width: 180px;
}

.componentes{
    font: 400 22px Roboto-Light;
    color: white;
}
.preco{
    font: 400 24px Roboto;
    color: white;
    font-weight: bold;
    margin-right: 20px;
    margin-top: 7px;
}

.mais-info{
    border: none;
    border-radius: 7px;
    font: 400 20px Roboto-Thin;
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
`
export {Container};