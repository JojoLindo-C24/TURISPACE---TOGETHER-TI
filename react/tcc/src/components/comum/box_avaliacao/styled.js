import styled from "styled-components";

const BoxAvaliacao = styled.div`
 padding-top: 0.7em;
.container{
    background: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    justify-content: center;
    width:80%;
    height: auto;
    overflow-y: auto;
    
}

.box-mensagem::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #1C1C1C;
	border-radius: 20px;
}

.box-mensagem::-webkit-scrollbar
{
	width: 10px;
	background-color: #000000;
}

.box-mensagem::-webkit-scrollbar-thumb
{
	border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #CBCBCB;
}

.chat{
    display: flex;
    padding: 1.4em 2.0em;
    
}


.box{
    display: flex;
        flex-direction: column;
        background: rgba(192, 65, 224, 0.19);
        border-radius: 3px;

        padding: 1.5em;
        height: 100%;

        overflow-y: auto;
}
.data{
    padding-left: 30em;
    font-size: 16px;
}

.tabela{
  align-items: center;
  display: flex;
  flex-direction: column;
}

`
export {BoxAvaliacao}