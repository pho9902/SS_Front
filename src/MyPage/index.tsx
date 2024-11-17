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
    
    useEffect(() =>{
        myCoin();
    }, [setCoin])

    return <div>
         {coin}
         <button onClick={() => addCoin()}>코인 충전</button>
    </div>
}