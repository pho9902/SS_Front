import { useEffect, useState } from "react"
import { Coin as CoinApi } from "../api"
import * as S from './style'
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Coin() {
    const navigate = useNavigate();
    const [coin, setCoin] = useState('')
    function substrCoinleft(str: string) {
        if(str.length === 13) setCoin(str.substring(str.length - 1))
        else if(str.length === 14) setCoin(str.substring(str.length - 2))
        else setCoin(str.substring(str.length - 3))
    }

    function myCoin() {
        CoinApi.getCoin().then(res => substrCoinleft(res.data))
    }
    function addCoin() {
        CoinApi.addCoin().then(res => substrCoinleft(res.data))
    }   
    useEffect(() => {
        if(!sessionStorage.getItem('accessToken')) {
            alert('로그인 후 이용 해 주세요');
            navigate('/');
        }
        myCoin();
        
    }, [setCoin])

    return <S.Wrap>
        <S.Content>

            <S.HeaderBox>
                <S.ProfileImg>
                    <FaUser color="gray" size='40' className="userIcon"/>
                </S.ProfileImg>
                <S.ProfileId>{sessionStorage.getItem('username')}</S.ProfileId>
            </S.HeaderBox>

            <S.InfoBox>    
                <S.HandleBox>
                    <S.CoinLeft>
                        보유 코인 : {coin}
                    </S.CoinLeft>
                    <S.CoinAddBtn onClick={() => addCoin()}>+</S.CoinAddBtn>    
                </S.HandleBox>
            </S.InfoBox>
         </S.Content>
    </S.Wrap>
}