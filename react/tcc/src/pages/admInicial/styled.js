import styled from "styled-components";

const Container = styled.div`
    background-image: url(${'/assets/images/BackgroundInfoPac.jpg'});
    background-size: cover;
    height: 180vh;

.Container-i{
    background: rgba(0, 5, 9, 0.65);
    border-radius: 10px;
    width: 80%;
    height:100%;
    margin: 0.3em auto;
    padding: 5em;
}

.titulo{
    text-align: center;
    color: #FFFFFF;
    font-size: 70px;
}
.conteudo{
    display:flex;
    flex-direction: column;
    justify-items: center;
    align-items:center;
    font-size: 20px;
    
}

.sobre{
    font-size: 30px;
    font-weight: bolder;
    color: #1E90FF;
    padding-top: 30px;
    padding-bottom: 20px; 
}
button {
    color: blue;
    border: 2px solid #1E90FF;
    box-sizing: border-box;
    border-radius: 10px;
    padding-top:2px; 
    width: 70em;
    height: 4em;
    transition: all 1s;
    cursor: pointer;
    background-color: #DCDCDC ;
    &:hover{
    transform: scale(1.2);
  }
    
}

`
export {Container};

