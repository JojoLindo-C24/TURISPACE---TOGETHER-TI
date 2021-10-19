import styled from "styled-components";
import BackgroundFaleConosco from "../../assets/images/fundo_fale_conosco.png"

const FaleConosco =  styled.div`
background-image: url(${BackgroundFaleConosco});



.Titulo{
    display: flex;
    justify-content: center;
}

.faleConosco   {  

color:antiquewhite;
text-align: center;
font-size: 50px;
width: 30vw;
height: 8vh;
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
height: 58vh;
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
    font-size: 30px;
    width: 45vw;
    height: 60vh;
    align-items: center;  
    color: #ffff;

}


label {
    
    font-size:90px;  

}

input {
    display: flex;
}


.input-mensagem{
    padding: 150px 80px 8px 180px;
    margin: 1px 0px 8px 0px ;  
}

text {
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