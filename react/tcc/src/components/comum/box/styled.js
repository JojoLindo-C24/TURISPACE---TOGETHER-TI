import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 5, 9, 0.85);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #FFFFFF;
  padding: 1.5em;
  align-items: center;
  margin: 1em 0px;

  .Titulo{
      font-size: 24px;
      width: 20%;
  }

  .Preco{
      font-size: 30px;
      font-weight: bold;
  }

  .Number{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 18%;

      & button{
          font-size: 20px;
          width: 1.5em;
          background: rgba(122, 122, 122, 0.65);
          color: #FFFFFF;
          border: solid 0px;
          cursor: pointer;
      }
  }

`;
