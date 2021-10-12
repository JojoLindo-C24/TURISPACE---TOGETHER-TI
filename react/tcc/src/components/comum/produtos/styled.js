import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  box-shadow: 0px 0px 8px 5px #c4c4c4;
  align-items: center;
  border-radius: 20px;


.bloco{
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
}
.imagem{
    height: 280px;
    width: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 0px 0px 20px;
}
.conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
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
}

.mais-info{
    border: none;
    border-radius: 7px;
    font: 400 16px Open Sans;
    color: white;
    background-color: transparent;
    cursor: pointer;
}
.mais-info :hover{
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
`
export {Container};