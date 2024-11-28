import { Link } from 'react-router-dom';
import * as S from './style'
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from 'react';

export default function List() {
    const [btnColor, setBtnColor] = useState<string>('white');

    function btnHandler(isOn: boolean): void {
        if(isOn) setBtnColor('lightgray')
        else setBtnColor('white')
        return;
    }

    return <S.Wrap>
        <S.Header>
            <h4>다양한 상품들을 뽑기 게임을 통해 뽑아보세요!</h4>
        </S.Header>
        <S.Margin />
        <S.ItemBox>
            <S.EachImg width='50%' src='gift/photo1.png' alt='photo3' />
            <S.EachImg width='50%' src='gift/photo3.jpeg' alt='photo3' />
        </S.ItemBox>
        <S.ItemBox>
            <S.EachImg width='50%' src='gift/photo5.jpeg' alt='photo5' />
            <S.EachImg width='50%' src='gift/photo4.jpeg' alt='photo4' />
        </S.ItemBox>
        <S.EachImg width='90%' src='gift/photo2.jpeg' alt='photo2' />
        <S.EachImg width='90%' src='gift/photo6.jpeg' alt='photo6' />
        <S.EachImg width='90%' src='gift/photoTotal.jpeg' alt='photoTotal' />
        <S.Margin />
        <S.GoGame style={{backgroundColor: btnColor}} onTouchStart={() => btnHandler(false)} onTouchEnd={() => btnHandler(true)}>
            <Link to='/game/1'>
                <TiArrowRightOutline  style={{textDecoration: 'none', color: 'black', backgroundColor: btnColor}} size={40} />
            </Link>
        </S.GoGame>
    </S.Wrap>
}
