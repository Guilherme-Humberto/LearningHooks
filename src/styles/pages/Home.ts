import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
      margin: 10px;
      font-size: 40px
  }

  p {
      max-width: 700px;
      text-align: center;
      font-size: 20px
  }

  a {
      text-decoration: none;
  }

  button {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 40px;
      background: transparent;
      color: #e1e1e6;
      font-size: 18px;
      font-weight: bold;
      margin: 20px;
      border: 1px solid #e1e1e6;
      border-radius: 25px;
      outline: none
  }
`;