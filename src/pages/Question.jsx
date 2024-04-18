import styled from "styled-components";
import { QuestionData } from "../assets/data/questiondata";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  // 현재 질문 번호와 총 점수를 상태로 관리
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // react-router-dom의 useNavigate 훅을 사용하여 페이지 이동을 관리
  const navigate = useNavigate();

  // 버튼 클릭 시 처리할 함수
  const handleClick = (no, type) => {
    // totalScore를 매핑하여 현재 선택한 유형에 해당하는 점수를 업데이트
    const newTotalScore = totalScore.map(item => {
      if (item.id === type) {
        return { ...item, score: item.score + no };
      }
      return item;
    });

    // totalScore와 questionNo를 업데이트
    setTotalScore(newTotalScore);

    // 다음 질문으로 넘어가거나 결과 페이지로 이동
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newTotalScore.reduce(
        (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        "",
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      {/* 진행 상황을 퍼센트로 표시 */}
      <p>진행 현황 : {(questionNo / QuestionData.length) * 100}</p>
      {/* 현재 질문의 제목을 표시 */}
      <Title>{QuestionData[questionNo].title}</Title>
      {/* 두 개의 선택지 버튼 */}
      <button onClick={() => handleClick(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</button>
      <button onClick={() => handleClick(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</button>
    </Wrapper>
  );
};

export default Question;

// 스타일드 컴포넌트를 사용하여 스타일 지정
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
`;
