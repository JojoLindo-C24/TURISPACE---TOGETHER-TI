import styled from "styled-components";

const Rodape = styled.div`
.rodape{
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: row;
    height: 130px;
    width: 100vw;
    justify-content: center;
}

.coluna1{
    display: flex;
    flex-direction: column;
    font-size: 16px ;
    font-family: 'Open Sans', sans-serif;
    color: white;
    align-items: center;
    margin: 15px 30px 0px 00px;
    width: 160px;
    text-align: center;
}

.coluna2{
    display: flex;
    flex-direction: column;
    font-size: 16px ;
    font-family: 'Open Sans', sans-serif;
    color: white;
    align-items: center;
    margin: 25px 30px 0px 30px;
    width: 160px;
}

.coluna3{
    display: flex;
    flex-direction: column;
    width: 160px;
    font-size: 16px ;
    font-family: 'Open Sans', sans-serif;
    color: white;
    align-items: center;
    margin: 25px 30px 0px 30px;
    width: 200px;
}

.coluna4{
    display: flex;
    flex-direction: column;
    font-size: 16px ;
    font-family: 'Open Sans', sans-serif;
    color: white;
    align-items: center;
    margin: 25px 30px 0px 30px;
    width: 210px;
}

.coluna5{
    display: flex;
    flex-direction: column;
    font-size: 16px ;
    font-family: 'Open Sans', sans-serif;
    color: white;
    align-items: center;
    margin: 25px 30px 0px 30px;
    width: 200px;
}

.c4-cima{
    cursor: pointer;
}

.c4-baixo{
    cursor: pointer;
}

.c4-baixo2{
    cursor: pointer;
    margin-top: 10px;
}

.c1-cima{
    margin-bottom: 10px;
}

.c2-cima{
    margin-bottom: 10px;
}

.c3-cima{
    margin-bottom: 10px;
}

.c4-cima{
    margin-bottom: 10px;
}

.c5-cima{
    margin-bottom: 10px;
}

.c1-baixo{
    display: flex;
    flex-direction: row;
}

.insta-logo{
    margin: 0px 20px 0px 0px;
    cursor: pointer;
}

.face-logo{
    cursor: pointer;
}

.twitter-logo{
    margin: 0px 0px 0px 20px;
    cursor: pointer;
}
`
export {Rodape};