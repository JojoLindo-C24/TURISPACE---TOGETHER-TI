import styled from 'styled-components';

export const Container = styled.div`
 background-image: url(${'/assets/images/pinacoteca.jpg'});
 background-size: cover;
 height: 130vh;

 body{margin: 0px}
*{
    box-sizing: border-box;
    cursor: default;
}

.f1-container{
  background-color: rgba(0, 5, 9, 0.75);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Conteudo-f1{
  width: 30vw;
}


.Buton-payment span{ 
  font-size: 26px;
  margin-left: 5vh;
}

.cartao{
  margin-left: -7vh;
  width: 7vh;
}

.Buton-payment{
  margin-top: 20vh;
  width: 460px;
  height: 60px;
  border: 0 none;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.card-number{
  margin-top: 3em;
  display: flex;
  flex-direction: column;
}

.line{
  background-color: white;
  height: 3px;
  width: 100%;
  border-radius: 5px;
}

.card-number ::placeholder{
  color: rgba(255, 255, 255, 0.65);
}

.card-number input{
  width: 30.3em;
  border: none;
  outline: none;
  
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  font-size: 15px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}

.name-number{
  margin-top: 2em;
}

.name-number input{
  width: 30.3em;
  border: none;
  outline: none;
  border-top: 1px;
  font-size: 15px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}

.name-number ::placeholder{
  color: rgba(255, 255, 255, 0.65);
}

.validity{
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
}

.validity ::placeholder{
  color: rgba(255, 255, 255, 0.65);
}

.validity input{
  border: 0 none;
  outline: 0;
  border : solid;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  font-size: 15px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}


.number-portion input{
  width: 35em;
  border: 0 none;
  outline: 0;
  border : solid;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  font-size: 15px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}

.number-portion{
  margin-top: 25px;
}

.Buton-comp{
  width: 40vh;
  height: 6vh;
  background: rgba(119, 119, 119, 0.65);
  border-radius: 10px;
  margin-top: 5vh;
}

.Buton-comp span{
  color: rgba(255, 255, 255, 0.85);
}

 .me-bag{
   margin-top: 20vh;
   width: 30vh;
   height: 9vh;
   background: rgba(255, 255, 255, 0.85);
   border-radius: 10px;
   text-align: center;
   align-items: center;
   display: flex;
   justify-content: center;
   font-size: 22px;
 }

 .parc-number{
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
 }

 .parc-number ::placeholder{
  color: rgba(255, 255, 255, 0.65);
 }

.parc-number input{
  width: 23vh;
  border: 0 none;
  outline: 0;
  border : solid;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  font-size: 15px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.65);
}

 .buton-cancelar{
  padding: 0.3em 1.6em;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  font: 22px OpenSans-Bold;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
 }

.Finalizar button{
  margin-top: 3em;
  margin-left: 7vh;
  padding: 0.4em 1.7em;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  border: none;
  font: 22px OpenSans-Bold;
  color: rgba(0, 5, 9, 0.75);
  cursor: pointer;
}



 .Container{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 60%;
 }

 .Index{
   display: flex;
   flex-direction: row;
   justify-content: space-around;
 }


 .Tudo{
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 1em;  
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;

 }

 .Ingressos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  background: rgba(0, 5, 9, 0.9);
  border-radius: 10px;
  width: 180px;
  height: 100px;
  margin-left: 10px;
 }

 .Ingressos span{
  color: #FFFFFF;

 }

 .Lixeira img{
   width: 4vh;
   margin-left: 23vh;
 }
`;

