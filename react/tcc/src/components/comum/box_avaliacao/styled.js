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

.container::-webkit-scrollbar-track
{
	
	background-color: #1C1C1C;
	border-radius: 20px;
}

.container::-webkit-scrollbar
{
	width: 10px;
	background-color: #000000;
}

.container::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(129,153,227)),
									   color-stop(0.72, rgb(73,125,189)),
									   color-stop(0.96, rgb(28,58,148)));
}

.chat{
    display: flex;
    padding: 1.4em 2.0em;
    
}

.chat-mensagem{
   
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