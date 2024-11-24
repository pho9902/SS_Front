import styled from "styled-components";

export const Wrap = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 70%;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const PwBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2``;

export const Label = styled.span``;

export const Input = styled.input`
  width: 55vw;
`;

export const Btn = styled.div`
  border: 1px solid;
  border-radius: 4px;
  padding: 3px;
  text-decoration: none;
  color: black;
`;

export const BtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
