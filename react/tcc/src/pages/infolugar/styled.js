import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${'/assets/images/wallpaperflare13.jpg'});
  background-size: cover;
  height: 120vh;

.Conteudo{
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    width: 90%;
    height: 100%;
    margin: 1em auto;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff
}

.f1-container{
  background-color: rgba(0, 5, 9, 0.75);
  width: 100%;
}

.esquerda, .direita{
  width: 40%;
  margin: 2em auto;
  height: 56vh;
}

.avaliacao{
  text-align: end;
  margin: 2em 0;
  font-size: 26px;
}

.img-lugares{
  width: 100%;
  height: 35vh;
}

.Barrinha{
  border-radius: 10px;
  width: 7%;
}

.tittle{
  font-size: 26px;

}

.nome{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  font-size: 2em;
  color: #FFFFFF;
  font-size: 30px;
}

.box {
  margin: 1.5em 0px;
}

`;

