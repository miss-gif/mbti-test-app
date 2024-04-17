import styled from "styled-components";
// import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/result";

const Result = () => {
  const nav = useNavigate();

  const handlerClickButton = () => {
    nav("/");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={ResultData[0].image} />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
        <button onClick={handlerClickButton}>테스트 다시하기</button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "SimKyungha";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`;
