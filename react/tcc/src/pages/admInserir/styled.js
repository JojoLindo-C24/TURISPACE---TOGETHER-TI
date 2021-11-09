import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${'/assets/images/Adm.png'});
  background-size: cover;
  height: 170vh;
  width: 100%;
  align-items: center;
  display : flex;
  flex-direction: column;

.Conteudo{
  background: rgba(0, 5, 9, 0.65);
  border-radius: 10px;
  width: 80%;
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
  width: 33%;
  font-size: 2em;
  color: #FFFFFF;
  font-weight: 100;
}

.Parte2{
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  width: 100%;
  height: 100vh;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
}

`;

