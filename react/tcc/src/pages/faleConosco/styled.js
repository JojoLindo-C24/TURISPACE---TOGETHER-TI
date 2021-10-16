import styled from "styled-components";

const FaleConosco =  styled.div`
body{margin: 0px}
*{
    box-sizing: border-box;
    cursor: default;
}


.Container
    height: 140vh;
    width: 99,2vw;
    background-image: url{(assets/images/fundo_fale_conosco.png.png)};
    background-repeat: no-repeat;
    background-position: center top;
    display: column;
    justify-items: center;
  
}


.Titulo{       
color:antiquewhite;
text-align: center;
font-size: 50px;
width: 25vw;
height: 10vh;
margin: 10px;
background: hsla(252, 87%, 9%, 0.562);
border: 2px solid rgba(15, 109, 210, 0.8);
border-radius: 15px;
}

.conteudo{
    display: flex;
    align-items: center;
}

.Parte1{
width: 37vw;
height: 60vh;
text-align: center;
margin: 100px;
background: hsla(252, 87%, 9%, 0.562);
border: 3px solid rgba(15, 109, 210, 0.8);
border-radius: 15px;
}

.mapa{
 padding: 25px 10px 0px 20px;
 text-align: center;
}

.cel{
    color:antiquewhite; 
    text-align: center;
    padding: 13px 0px 0px 0px;
}

.email{
    color:antiquewhite; 
    text-align: center;
    padding: 15px 0px 10px 0px;
}

.Parte2 {
    width: 45vw;
    height: 60vh;
    align-items: center;  
}


label {
    
    font-size:30px;  
}

input {
    border-radius: 7px;
    padding: 9px 80px 8px 170px;
    margin: 1px 0px 8px 0px ;
}


textarea {
    border-radius: 7px;
    padding: 150px 80px 8px 180px;
    margin: 1px 0px 8px 0px ;
}

button {
font-size: 23px;  
color:antiquewhite;
background: hsla(252, 87%, 9%, 0.562);
border: 3px solid rgba(255, 255, 255, 0.959);
border-radius:7px;
padding: 2px 20px;

}
`
export {FaleConosco};