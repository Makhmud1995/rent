import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  button {
    width: 259px;
    height: 45px;
    background: #006dab;
    color: white;
    cursor: pointer;
    font-size: large;
    border: none;
  }
  button:hover {
    background-color: #004167;
  }
  div {
    width: 250px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  div:hover {
    color: #006dab;
    /* transform: scale(1.1); */
    transition: all 200ms ease;
  }
`;