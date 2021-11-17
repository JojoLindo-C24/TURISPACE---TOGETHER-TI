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
  background-size: cover;
}

.lista-produtos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
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
    background-image: url(${'/assets/images/saopaulo.png'});
    align-items: center;
}

.lugaresInicial{
    display: flex;
    flex-wrap: wrap;
    margin-top: 3em;
    margin-bottom: 2em;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.mais-lugares{
    text-decoration: none;
    color: white;
    font: 22px Rosario-SemiBold;
    cursor: pointer;
    margin-bottom: 2em;
    background-color: rgba(0, 5, 9, 0.85);
    padding: 1em;
    border-radius: 20px;
}

.mais-lugares:hover{
    text-decoration: underline;
    transform: scale(1.05);
    transition: 0.6s;
}
`
export {Container}