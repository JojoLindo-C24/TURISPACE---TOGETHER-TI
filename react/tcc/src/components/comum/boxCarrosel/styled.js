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