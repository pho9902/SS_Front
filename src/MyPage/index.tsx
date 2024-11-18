import { useEffect, useState } from "react"
import { Coin } from "../api"


export default function MyPage() {
    const [coin, setCoin] = useState()

    function myCoin() {
        Coin.getCoin().then(res => setCoin(res.data))
    }
    function addCoin() {
        Coin.addCoin().then(res => setCoin(res.data))
    }   
    function deduCoin() {
        Coin.deduCoin().then(res => setCoin(res.data))
    }
    useEffect(() =>{
        myCoin();
    }, [setCoin])

    return <div>
         {coin}
         <button onClick={() => addCoin()}>코인 충전</button>
         <button onClick={() => deduCoin()}>코인 차감(api테스트)</button>
    </div>
}