import styled from 'styled-components';

export const Container = styled.div`
    background-image: url(${'/assets/images/Fundooo.jpg'});
    background-size: cover;
    min-height: 140vh;

 .Container{
    height: 100vh;
    align-items: center;
    display : flex;
    flex-direction: column;
}

 .Conteudo{
    background: rgba(0, 5, 9, 0.65);
    border-radius: 10px;
    width: 80%;
    height: 90%;
    margin: 4em auto;
 }

 .Box-Titulo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 42%;
  font-size: 1.8em;
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
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  transition: all 1s;
  cursor: pointer;
  margin-right: 10%;
  &:hover{
    transform: scale(1.2);
  }
}


table {
  margin-top: auto;
}


 tbody {
     background-color: #F5F5F5;
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

.absolute {
    color: white;
    background-color: #DB21BD;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 50%;
    height: 50%;
    text-align: center;
    font-size: .9em;
}



.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
    
}

.user-image img {
    width: 57%;
    height: 57%;
    border-radius: 50%;
    height: 57%;
    
}

.tabela{
  margin-top:-5%;
  align-items: center;
  display: flex;
  flex-direction: column;
}


button{
    background: rgba(0, 5, 9, 0.65);
    border-radius: 7px;
    width: 7em;
    height: 3em;
}

`;

