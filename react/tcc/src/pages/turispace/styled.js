import styled from "styled-components";

import BackgroundInitial from "../../assets/images/Inicial-background.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3em;
  background-image: url(${BackgroundInitial});

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
    justify-content: center;
    flex-wrap: wrap;
  }

.Sejam-Bem-Vindos{
    font: 48px Montserrat-Medium;
}
`
export {Container}