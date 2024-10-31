import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  border: none;
  display: flex;

  position: fixed;

  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  background-color: white;
  border: 1px solid red;
  padding: 5%;
`;
