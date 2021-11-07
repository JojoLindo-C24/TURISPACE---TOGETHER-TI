import styled from "styled-components";

const BoxAvaliacao = styled.div`
 padding-top: 2em;
.container{
    background: rgba(255, 255, 255, 0.85);
    border-radius: 14px;
    justify-content: center;
    width:78em;
    height: 26em;
    overflow-y: auto;
    
}

.container::-webkit-scrollbar-track
{
	
	background-color: #1C1C1C;
	border-radius: 10px;
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

.box{
    display: flex;
    padding: 1.4em 2.0em;
    
}

.box-mensagem{
   
}

.data{
    padding-left: 50em;
    font-size: 16px;
}
`
export {BoxAvaliacao}