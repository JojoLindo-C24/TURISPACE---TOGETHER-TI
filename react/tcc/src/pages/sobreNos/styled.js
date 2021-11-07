import styled from "styled-components";

const SobreNos = styled.div `
    background-image: url(${'/assets/images/fundoSobreNos.png'});
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffff;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   

    
.Conatiner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

/* .titulo{
   margin: auto;
   margin-top: 7vh;
   display: flex;
   font-size: 59px;
   justify-content: center;
   text-align: center;
   width: 32vw;
   height: 15vh;
   border: 4px solid #0F6DD2;
   box-sizing: border-box;
   border-radius: 10px;
   background: rgba(0, 0, 1, 0.74);
} */


.Conteuodo-1{
    padding: 1.7em;
    border-radius: 5px;
    margin-left: 9vw;
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
    width: 30%;
}

.text{
    font: 18px Roboto-Light;
    color: white;
    margin-top: 15px;
}

.info{
    font: 18px Roboto-Light;
    color: white;
    margin-top: 15px;
}


.titulo-C1{
    font: 29px Roboto-Bold;
    text-align: center;
    margin-bottom: 15px;
}

.line-content{
    background-color: white;
    height: 2px;
    width: 100%;
}

.Conteuodo-2{
    padding: 1.7em;
    border-radius: 5px;
    margin-left: 9vw;
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
    width: auto;
}

.titulo-C2{
    font-size: 29px;
    text-align: center;
    height: 7vh;
}

.info{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.Nomes{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1em;
}

.Parcerias{
    display: flex;
    flex-direction: column;
    align-items: center ;
}

.Tusispace{
    height: 4vh;
}

.nome{
    margin: 0px;
    font: 18px Roboto-Light;
    color: white;
}

`
export {SobreNos}