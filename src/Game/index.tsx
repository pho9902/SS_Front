import Video from "./Video";
import { fallCtrl, moveCtrl } from "../api/Ctrl";
import { LuArrowLeft,LuArrowRight, LuArrowDown, LuArrowUp } from "react-icons/lu";
import * as S from "./style";
import { FaRegPlayCircle } from "react-icons/fa";
import { Coin } from "../api";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

export default function Game() {
    const [coin, setCoin] = useState('');
    const [isStart, setIsStart] = useState(false)
    const navigate = useNavigate()

    function substrCoinleft(str: string) {
        if(str.length === 13) setCoin(str.substring(str.length - 1))
        else if(str.length === 14) setCoin(str.substring(str.length - 2))
        else setCoin(str.substring(str.length - 3))
    }

    const handleBtn = (dir: string, status: string) => {
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
      if(!sessionStorage.getItem('accessToken')) {
        alert('로그인 후 이용 해 주세요');
        navigate('/');
      }        
      myCoin()
    }, [])
    
    return <S.Wrap>
      <S.Header>
      <S.CoinLeft>남은 코인 : {coin}</S.CoinLeft>
      <Timer isStart={isStart} setIsStart={setIsStart} handleBtn={handleBtn} />
      </S.Header>
      <Video />
      <S.Controller>
        {isStart ? <S.ControllerWrap>
          <S.ArrowFlow>
            <S.TempBox>
              <S.Temp1 />
            </S.TempBox>
            <LuArrowUp style={{flexGrow: 1}} onTouchStart={() => handleBtn('forward', 'on')} onTouchEnd={() => handleBtn('forward', 'off')} size={44} />  
            <S.TempBox>
              <S.Temp2 />
            </S.TempBox>
          </S.ArrowFlow>
          <S.ArrowFlow>
            <LuArrowLeft style={{flexGrow: 1}} onTouchStart={() => handleBtn('left', 'on')} onTouchEnd={() => handleBtn('left', 'off')} size={44} />  
            <S.FallBtn style={{flexGrow:1}} onClick={() => handleBtn('fall', 'on')} >
              <h3>
                Fall!
              </h3>
            </S.FallBtn>
            <LuArrowRight style={{flexGrow: 1}} onTouchStart={() => handleBtn('right', 'on')} onTouchEnd={() => handleBtn('right', 'off')} size={44} />  
          </S.ArrowFlow>
          <S.ArrowFlow>
            <S.TempBox>
              <S.Temp2 />
            </S.TempBox>
            <LuArrowDown style={{flexGrow: 1}} onTouchStart={() => handleBtn('back', 'on')} onTouchEnd={() => handleBtn('back', 'off')} size={44} />  
            <S.TempBox>
              <S.Temp1 />
            </S.TempBox>
          </S.ArrowFlow>
        </S.ControllerWrap> : <div onClick={() => setIsStart(!isStart)}>Start</div>}
      </S.Controller>
    </S.Wrap>
}