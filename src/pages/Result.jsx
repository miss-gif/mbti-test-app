import styled from "styled-components";
// import "./Home.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/result";
import { useEffect, useState } from "react";
import KakaoSharingButton from "../component/KakaoSharingButton";

const Result = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find(item => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  const handlerClickButton = () => {
    nav("/");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={resultData.image} />
        </LogoImage>
        <Desc>
          예비 집사({resultData.best})님과 찰떡궁합인 고양이는 {resultData.name}입니다. <br />
          {resultData.desc}
        </Desc>
        <div style={{ display: "flex" }}>
          <button onClick={handlerClickButton}>테스트 다시하기</button>
          <KakaoSharingButton />
        </div>
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
