import styled from "styled-components";

import BackgroundInitial from "../../assets/images/Inicial-background.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${BackgroundInitial});
  align-items: center;

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

.Turispace{

}

.Turispace-subtitulo{
    font: 44px Montserrat-SemiBold;
    color:  #17324A;
    text-align: center;
}

.Turispace-promocoes{
    font: 40px Montserrat-SemiBold;
    color: white;
    background-color: rgba(0, 5, 32, 0.85);
    width: 100vw;
    padding: 1em 0em 1em 0em;
    text-align: center;
}
`
export {Container}