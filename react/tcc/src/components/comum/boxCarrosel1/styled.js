import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 5, 9, 0.75);
  border-radius: 20px;
  transform: scale(0.9);
  transition: all 0.7s;

  &:hover {
    transform: scale(1.0);
  }

  img {
    height: 14em;
  }

  .component-img{
    border-radius: 20px 0px 0px 20px;
    height: 12em;
    width: 12em;
  }

  .edit img {
    width: 40px;
    height: auto;
  }

  .edit {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em;
    background: #fff;
    border-radius: 40px;
    position: absolute;
    right: 0.5em;
    width: 4em;
    height: 4em;
    bottom: 1em;
    transform: scale(0.6);
    transition: all 0.6s;

    &:hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }

  .pt2 {
    display: flex;
    flex-direction: column;
    padding: 2em 1.4em;
    justify-content: space-between;
    color: #fff;

    .titulo {
      font-size: 1.4em;
      text-align: center;
    }

    .ver-mais {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;

      & :hover{
        cursor: pointer;
        text-decoration: underline
      }
    }
  }
`
export {Container}