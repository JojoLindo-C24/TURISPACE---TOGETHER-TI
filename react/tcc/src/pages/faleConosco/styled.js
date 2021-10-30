import styled from "styled-components";
import BackgroundFaleConosco from "../../assets/images/fundo_fale_conosco.png"

const FaleConosco =  styled.div`
    background-image: url(${BackgroundFaleConosco});
    background-repeat: no-repeat;
    height: 157vh;
    width: 100vw;

.Titulo{
    display: flex;
    justify-content: center;
    padding: 2em 0em;
}

.faleConosco   {  
    color:antiquewhite;
    text-align: center;
    font-size: 60px;
    width: 7.5em;
    height: 1.5em;
    background: hsla(252, 87%, 9%, 0.562);
    border: 2px solid rgba(15, 109, 210, 0.8);
    border-radius: 15px;
}

.conteudo{
    display: flex;
    align-items: center;
    justify-content: center;
}

.Parte1{
    width: 30em;
    height: 30.5em;
    text-align: center;
    background: hsla(252, 87%, 9%, 0.562);
    border: 3px solid rgba(15, 109, 210, 0.8);
    border-radius: 15px;
    padding: 2em;
    margin-bottom: 2em;
}

.mapa img{
    height: 20em;
    text-align: center;
    width: 25em;
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
    color: #ffff;
    padding: 0em 2em;
}

input {
    display: flex;
}

.input-nome{
    width: 35em;
    height: 2.5em;
    cursor: text;
    outline: none;
    border-radius: .4em;
    border: none;
}
.input-mensagem{
    cursor: text;
    outline: none;
    border-radius: .4em;
    border: none;
    width: 35em;
    height: 15em;
}


.botao{
   text-align: center;
}

.botao-enviar {
    font-size: 23px;  
    color:antiquewhite;
    background: hsla(252, 87%, 9%, 0.562);
    border: 3px solid rgba(255, 255, 255, 0.959);
    border-radius:7px;
    padding: 2px 20px;
    cursor: pointer;
    margin-top: 1em;
}
`
export {FaleConosco};