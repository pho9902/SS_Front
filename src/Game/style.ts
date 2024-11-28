import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  height: 8vh;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const CoinLeft = styled.span``

export const Controller = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  margin: 12px;
  justify-content: center;
  align-items: center;
`

export const ControllerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.5vh;
`

export const FallBtn = styled.div`
  border: 2px solid lightgray;
  width: 20%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`

export const ArrowFlow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 13vh;
`

export const Temp1 = styled.div`
  width: 2px;
  height: 90%;
  background-color: lightgray;
  transform: rotate(-45deg);
`

export const Temp2 = styled.div`
  width: 2px;
  height: 90%;
  background-color: lightgray;
  transform: rotate(45deg);
`

export const TempBox = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%
`
