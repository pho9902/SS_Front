import { useEffect, useState, useRef } from "react";

export default function Timer({isStart, setIsStart, handleBtn}: any) {
    const [timerSec, setTimerSec] = useState(20);
    const time = useRef(20);
    const timerRef = useRef(null)

    useEffect(() => {
        //@ts-ignore
        timerRef.current = setInterval(() => {
            time.current -= 1
            setTimerSec(time.current)
        }, 1000);
        //@ts-ignore
        return () => clearInterval(timerRef.current);
    }, [])

    useEffect(() => {
        if(!isStart) {
            time.current = 20
        }
        if(time.current <= 0) {
            //@ts-ignore
            clearInterval(timerRef.current);
            handleBtn('fall', 'on')
            //@ts-ignore
            timerRef.current = setInterval(() => {
                time.current -= 1
                setTimerSec(time.current)
            }, 1000);
            
        }
    }, [timerSec])

    return <>{!isStart ? <div onClick={() => setIsStart(!isStart)}>Start!</div> : <div>{timerSec}</div>}</>
}