import styled from "styled-components";
import BackgroundFaleConosco from "../../assets/images/fundo_fale_conosco.png"

const AdmMensagens = styled.div`
    background-image: url(${BackgroundFaleConosco});
    background-size: cover;
    min-height: 100vh;

.Container{
    height: 50em;
    align-items: center;
    display : flex;
    flex-direction: column;
}

.conteudo{
    height: 90%;
    width: 85%;
    background-color: rgba(4, 30, 57, 0.91);
    border-radius: 10px;
    margin: 4em auto;
}

.titulo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  font-size: 1.8em;
  color: #FFFFFF;
  font-weight: 100;
  padding: 2em;
}

.Barrinha{
    border-radius: 10px;
}

.nomeAvaliacao{
    color:white;
    font-size:50px;
    padding: 0em 0.5em;
}

.box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.85);
        border-radius: 10px;
        padding: 1.5em;
        height: 73%;
        width: 100%;
        overflow-y: scroll ;
}

.box::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: white;
}

.box::-webkit-scrollbar
{
	width: 12px;
	background-color: blue;
}

.box::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: blue;
}
`
export {AdmMensagens};