import { fallCtrl, moveCtrl } from "../../api/Ctrl"

export default function Controler() {
    
    return <div>
        <div onClick={() =>{
            moveCtrl('left', 'on').then(res => console.log(res))
        }}>왼쪽</div>
        <div>위쪽</div>
        <div>오른쪽</div>
        <div>아래</div>

        <button onClick={() => fallCtrl('realad').then(res => console.log(res))}>fall</button>
    </div>
}