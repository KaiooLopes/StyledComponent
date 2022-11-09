import { Intro, Content } from "./styles";
import ImgWheel from "./wheel.png";

const IntroSection = () => {
  return (
    <Intro id="intro">
      <Content>
        <img src={ImgWheel} alt="wheel" />
        <p>
          Fiz este projeto para aprender sobre Styled-Component na prática e
          treinar minhas hablidades com css, e nele vou mostrar alguns dos meus
          carros favoritos.
        </p>
      </Content>
    </Intro>
  );
};

export default IntroSection;
