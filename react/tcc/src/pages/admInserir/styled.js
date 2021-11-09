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
  font: 36px OpenSans-Bold;
  color: #FFFFFF;
}

.Parte2{
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4em;
  height: 30em;
}

.coluna1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  justify-content: space-between;
}

.coluna2{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.inputs{
  padding: 0.7em 1.4em;
  background-color: rgba(0, 5, 9, 0.75);
  border: none;
  border-radius: 5px;
  width: 80%;
  outline: none;
}

.inputs-img{
  padding: 0.7em 1.4em;
  background-color: rgba(0, 5, 9, 0.75);
  border: none;
  border-radius: 5px;
  width: 80%;
  outline: none;
  height: 120px;
}

.botao-alterar{
  background-color: transparent;
  padding: 1em;
  border-radius: 15px;
  border: 2px solid rgba(0, 5, 9, 0.75);
  font: 18px OpenSans-SemiBold;
  color: rgba(0, 5, 9, 0.75);
  cursor: pointer;
}

`;

