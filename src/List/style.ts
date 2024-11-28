import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

export const  Header = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
`

export const GoGame = styled.div`
    border-radius: 50%;
    top: -1;
    right: 0;
    margin-right: 20px;
    position: fixed;
    border: 2px solid;
    overflow: hidden;
`

export const ItemBox = styled.div`
    width: 90%;
    display: flex;
`

export const EachImg = styled.img`
    object-fit: cover;
    margin: 2px;
`

export const Margin = styled.div`
    margin-bottom: 8vh;
`