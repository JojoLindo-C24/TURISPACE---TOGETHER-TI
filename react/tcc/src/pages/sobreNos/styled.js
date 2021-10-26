import styled from "styled-components";

const SobreNos = styled.div `
    height: 100vh;
    width: 100vw;
    background-image: url(${'/assets/images/fundoSobreNos.png'});
    background-repeat: no-repeat;
    color: #ffff;
   

    
.Conatiner{
    display: column;
    align-items: center;
    
}

// titulo{
//    margin: auto;
//    margin-top: 7vh;
//    display: flex;
//    font-size: 59px;
//    justify-content: center;
//    text-align: center;
//    width: 32vw;
//    height: 15vh;
//    border: 4px solid #0F6DD2;
//    box-sizing: border-box;
//    border-radius: 10px;
//    background: rgba(0, 0, 1, 0.74);
//}


.Conteuodo-1{
    padding: 20px;
    border-radius: 5px;
    z-index: 100;  
    margin-top:26px;
    margin-left: 9vw;
    width: 29%;
    border: 4px solid #0F6DD2;
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
   
}



.titulo-C1{
    font-size: 19px;
    text-align: center;
    height: 5vh;
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