import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${'/assets/images/fundo-MeuPacote.png'});
  background-size: cover;
  height: 150vh;

  .Barrinha{
  border-radius: 10px;
}

.Box-Titulo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 100;
  padding: 4em;
}

.Conteudo{
  margin: -9em auto;
  padding: 4em;
}

table {
  margin-top: auto;
  font-size: 20px;
}

td {
    text-align: left;
    padding: 1.1em;
    color: #6D6868;
    font-weight: 600;
}

.white {
    background-color: #fff;
}

th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
} 

.table-user {
    border-collapse: collapse;
}

.linha-alternada{
  background-color: #fff;
}

button {
    cursor: pointer;
}

.button-create button:hover {
    background-color: #aa3997;
    transition: 2s;
}

img {
    cursor: pointer;
}





button{
    background: rgba(0, 5, 9, 0.65);
    border-radius: 7px;
    width: 7em;
    height: 3em;
}


.tabela{
    background: rgba(255, 255, 255, 0.85);

    width:80%;
    height: 28em;
    overflow-y: auto;
    margin: -4em auto;
    padding: 3em;
}

.tabela::-webkit-scrollbar-track
{
	
	background-color: #1C1C1C;
	border-radius: 10px;
}

.tabela::-webkit-scrollbar
{
	width: 10px;
	background-color: #000000;
}

.tabela::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(129,153,227)),
									   color-stop(0.72, rgb(73,125,189)),
									   color-stop(0.96, rgb(28,58,148)));
}

`;

