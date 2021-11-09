import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000509;
    width: 100%;
    height: 130vh;

.content-line{
    background-color: rgba(25, 47, 69, 0.23);
    border: 5px solid #3990ED;
    width: 95%;
    height: 80vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
}
.content-box{
    background-color: white;
    border: none;
    width: 55%;
    height: 75%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title{
    font: 52px OpenSans-ExtraBold;
    color: rgba(0, 5, 9, 0.85);
    width: 55%;
    display: flex;
    align-items: center;
    text-align: center;
}

.img-aproved{
    width: 150px;
    height: auto;
}

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.more-informations{
    border: none;
    cursor: pointer;
    background-color: transparent;
    font: 18px Roboto-Light;
    color: black;
}

.more-informations:hover{
    text-decoration: underline;
}

.initial-page{
    border: none;
    cursor: pointer;
    background-color: transparent;
    font: 18px Roboto-Light;
    color: black;
}

.initial-page:hover{
    text-decoration: underline;
}
`
export {Container}