import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${'/assets/images/Adm.png'});
  background-size: cover;
  height: 170vh;
  width: 100%;
  align-items: center;
  display : flex;
  flex-direction: column;

@media(min-width: 1700px){
   .Box-Titulo{
    font: 48px OpenSans-Bold;
    color: #FFFFFF;
   }
}

.Conteudo{
  background: rgba(0, 5, 9, 0.65);
  border-radius: 10px;
  width: 80%;
  margin: 3em auto;
  padding: 4em;
}

.Barrinha{
  border-radius: 10px;
  margin-right: 7%;
}

.Box-Titulo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 33%;
  font: 36px OpenSans-Bold;
  color: #FFFFFF;
}

.Parte2{
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-between;
  width: 100%;
}

.Parte1{
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  padding: 4em;
  height: 70vh;
  justify-content: space-around;
  align-items: center;
}

.coluna1{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
  width: 20vw;
  height: 6vh;
  outline: none;
  font: 16px Rosario-SemiBold;
  color: white;
  margin-bottom: 5%;
}

.botao-alterar{
  background-color: transparent;
  padding: 0.4em;
  border-radius: 15px;
  border: 5px solid rgba(0, 5, 9, 0.75);
  font: 22px OpenSans-SemiBold;
  color: rgba(0, 5, 9, 0.75);
  cursor: pointer;
  width: 12vw;
}

.botao-alterar:hover{
  transform: scale(1.2);
  transition: 1s;
}

`

export {Container};

