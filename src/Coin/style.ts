import styled from "styled-components";

export const Wrap = styled.div`
    height: 80vh;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const ProfileImg = styled.div`
    .userIcon {
        border: 1px solid gray;
        border-radius: 50%;
    }
`

export const ProfileId = styled.span`
    font-size: x-large;
    margin-left: 10px;
`
export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CoinLeft = styled.span`
    font-size: x-large;
    margin-right: 20px;
`

export const HandleBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

export const CoinAddBtn = styled.button`
    border-radius: 50%;
    border: 1px solid gray;
    background-color: white;
    padding: 2%;
    width: 50px;
    height: 50px;
    font-size: xx-large;
    color: gray;
`

export const GetList = styled.div``