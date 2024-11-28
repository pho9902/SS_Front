import { fallCtrl, moveCtrl } from "../../api/Ctrl"
import { LuArrowLeft,LuArrowRight, LuArrowDown, LuArrowUp } from "react-icons/lu";
import * as S from "./style";
import { FaRegPlayCircle } from "react-icons/fa";
import { Coin } from "../../api";
import { useEffect, useState } from "react";
import Timer from "../Timer";
import { useNavigate } from "react-router-dom";


export default function Controller() {
    const [coin, setCoin] = useState('');
    const [isStart, setIsStart] = useState(false)
    const navigate = useNavigate()

    function substrCoinleft(str: string) {
        if(str.length === 13) setCoin(str.substring(str.length - 1))
        else if(str.length === 14) setCoin(str.substring(str.length - 2))
        else setCoin(str.substring(str.length - 3))
    }

    const handleBtn = (dir: string, status: string) => {
        console.log('1')
        if(coin === '0') {
            alert('코인이 없습니다. 충전 페이지로 이동합니다.')
            navigate('/coin');
            return;
        }
        if(!isStart) {
            alert('시작 버튼을 눌러 시작해주세요');
            return;
        }
        if(dir === 'fall') {
            fallCtrl().then(res => console.log(res)).catch(err => alert('개발자에게 문의해주세요')).finally(() => {
                setIsStart(false)
                myCoin()
            })
            return;
        }
        moveCtrl(dir, status).then(res => console.log(res)).catch(err => alert('개발자에게 문의해주세요'))
    }


    function myCoin() {
        Coin.getCoin().then(res => substrCoinleft(res.data))
    }


    useEffect(() => {
        if(sessionStorage.getItem('username') !== 'realad') myCoin()
    }, [])
    
    return <>
        <S.Wrap>
            <S.ArrowWrap>
                <S.ArrowFlow>
                    <S.TempItem />
                    <LuArrowUp onTouchStart={() => handleBtn('forward', 'on')} onTouchEnd={() => handleBtn('forward', 'off')} size={44} onMouseDown={() => handleBtn('forward', 'on')} style={{ flexGrow: 1}} onMouseUp={() => handleBtn('forward', 'off')} />
                    <S.TempItem />
                </S.ArrowFlow>  

                <S.ArrowFlow>
                    <LuArrowLeft onTouchStart={() => handleBtn('left', 'on')} onTouchEnd={() => handleBtn('left', 'off')} size={44} onMouseDown={() => handleBtn('left', 'on')} style={{ flexGrow: 1}} onMouseUp={() => handleBtn('left', 'off')} />
                    <S.TempItem />
                    <LuArrowRight onTouchStart={() => handleBtn('right', 'on')} onTouchEnd={() => handleBtn('right', 'off')} size={44} onMouseDown={() => handleBtn('right', 'on')} style={{ flexGrow: 1}} onMouseUp={() => handleBtn('right', 'off')} />
                </S.ArrowFlow>  

                <S.ArrowFlow>
                    <S.TempItem />
                    <LuArrowDown onTouchStart={() => handleBtn('back', 'on')} onTouchEnd={() => handleBtn('back', 'off')} size={44} onMouseDown={() => handleBtn('back', 'on')} style={{ flexGrow: 1}} onMouseUp={() => handleBtn('back', 'off')} />
                    <S.TempItem />
                </S.ArrowFlow>

            </S.ArrowWrap>
            <FaRegPlayCircle color='red' size={77} onClick={() => {
                handleBtn('fall', 'on')
                }} />
        </S.Wrap>
        
        <S.TimerBox>
            <S.CoinLeft>남은 코인 : {coin}</S.CoinLeft>
            {/* @ts-ignore */}
            <Timer isStart={isStart} setIsStart={setIsStart} handleBtn={handleBtn} />
        </S.TimerBox>
    </>
}