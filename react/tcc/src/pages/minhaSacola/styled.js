import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${'/assets/images/wallpaperflare6.png'});
  background-size: cover;
  height: 100%;

.Container{
  height: 100%;
  align-items: center;
  display : flex;
  flex-direction: column;
  padding: 4em;
}

.Conteudo{
  background: rgba(196, 196, 196, 0.5);
  border-radius: 20px;
  width: 70%;
  height: 70%;
  margin: 3em auto;
  padding: 4em;
}

.Barrinha{
  border-radius: 10px;
}

.Box-Titulo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 26%;
  font-size: 2em;
  color: #FFFFFF;
  font-weight: 100;
}

.faixaa{
  background: rgba(0, 5, 9, 0.85);
  border-radius: 10px;
  width: 10em;
  padding: 0.7em;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
  position: absolute;
  right: 18em;
}

.pagar{
  color: #FFFFFF;
  border: 6px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0.5em;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  transition: all 1s;
  cursor: pointer;
  background-color: transparent;
  &:hover{
    transform: scale(1.2);
  }
}

@media (max-width:1000px){
    transform: scale(0.8);
    }
    .Conteudo{
      width: 80%;
      height: 60%;
    }
    .pagar{
      width: 15em;
    }

`;

