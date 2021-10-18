import styled from "styled-components";

const SobreNos = styled.div `
    height: 110vh;
    width: 100vw;
    background-image: url(${'/assets/images/fundo_sobreNos.png'});
   
    color: #ffff;
   

    
.Conatiner{
    display: column;
    align-items: center;
    
}

.Titulo{
    margin: auto;
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
}


.Conteuodo-1{
    margin-top: 6vh;
    margin-left: 5vw;
    display: flex;
    font-size: 19px;
    align-items: center;
    padding: 0px 0px 0px 15px;
    width: 46vw;
    height: 23vh;
    border: 4px solid #0F6DD2;
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
}

.Conteuodo-2{
    margin-top: 5vh;
    margin-left: 65vw;
    display: column;
    align-items: center;
    justify-content: center;
    width: 28vw;
    height: 25vh;
    border: 4px solid #0F6DD2;
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
    
}

.titulo-C2{
    font-size: 19px;
    text-align: center;
    height: 5vh;
}

.info{
    display: flex;
    justify-content: center;
}

.Nomes{
    font-size: 18px;
    text-align: left;
}

.Parcerias{
    text-align: center ;

}

.Tusispace{
    height: 4vh;
}


`
export {SobreNos}