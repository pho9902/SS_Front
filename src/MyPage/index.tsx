import { useEffect, useState } from "react"
import { Coin } from "../api"
import * as S from './style'
import { TbBrandCoinbase } from "react-icons/tb";


export default function MyPage() {
    const [coin, setCoin] = useState('')
    function substrCoinleft(str: string) {
        if(str.length === 13) setCoin(str.substring(str.length - 1))
        else if(str.length === 14) setCoin(str.substring(str.length - 2))
        else setCoin(str.substring(str.length - 3))
    }

    function myCoin() {
        Coin.getCoin().then(res => substrCoinleft(res.data))
    }
    function addCoin() {
        Coin.addCoin().then(res => substrCoinleft(res.data))
    }   
    function deduCoin() {
        Coin.deduCoin().then(res => substrCoinleft(res.data))
    }
    useEffect(() =>{
        myCoin();
    }, [setCoin])

    return <S.Wrap>
        <S.HeaderBox>
            <S.ProfileImg />
            <S.ProfileId>{sessionStorage.getItem('username')}</S.ProfileId>
        </S.HeaderBox>
        <S.InfoBox>
            <S.CoinLeftBox>
                <S.CoinImg>
                    <TbBrandCoinbase />
                </S.CoinImg>
                <S.CoinLeft>
                    : {coin}
                </S.CoinLeft>
            </S.CoinLeftBox>
            <S.CoinAddBtn onClick={() => addCoin()}>코인 충전(따로 페이지 빼는게 이쁠듯)</S.CoinAddBtn>
         </S.InfoBox>
         <S.GetList>
            여기다 뽑은 경품 리스트, 주소변경 넣으면 좋을듯
         </S.GetList>
         <button onClick={() => deduCoin()}>코인 차감(api테스트)</button>
    </S.Wrap>
}