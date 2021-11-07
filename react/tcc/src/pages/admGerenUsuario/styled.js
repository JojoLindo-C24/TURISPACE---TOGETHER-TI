import styled from 'styled-components';

export const Container = styled.div`
    background-image: url(${'/assets/images/sao_paulo.png'});
    background-size: cover;
    height: 150vh;

.Container{
    height: 100vh;
    align-items: center;
    display : flex;
    flex-direction: column;
}

 .Conteudo{
    background: rgba(4, 30, 57, 0.91);
    border: 5px solid #003974;
    box-sizing: border-box;
    width: 85%;
    height: 100vh;
    margin: 3em auto;
 }

 .Box-Titulo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  font-size: 2em;
  color: #FFFFFF;
  font-weight: 100;
  padding: 2em;
}

.Barrinha{
  border-radius: 10px;
}

.Box-Titulo span{
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
  margin-right: 30em;
  &:hover{
    transform: scale(1.2);
  }
}


table {
    margin-top: 2em;
}


 tbody {
     background-color: #F5F5F5;
 }

td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
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

.absolute {
    color: white;
    background-color: #DB21BD;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
   font-size: .7em;
}



.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
    
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
    
}

.tabela{
    margin-top: -7em;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.Voltar{
  background: rgba(0, 5, 9, 0.75);
  border-radius: 30px 0px 0px 30px;
  width: 7em;
  margin-top: -10em;
  margin-left: -10em;
  transform: rotate(-180deg);
}

.Voltar span{
}

`;

