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

.lista-produtos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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