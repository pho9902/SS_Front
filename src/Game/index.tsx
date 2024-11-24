import Video from "../Video";
import Controller from "./Controller";
import * as S from "./style";


export default function Game() {
  return (
    <S.Wrap>
      <Video />
      <Controller />
    </S.Wrap>
  );
}
