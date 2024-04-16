import styled from "styled-components";
import { QuestionData } from "../assets/data/questiondata";
import { useState } from "react";

const Question = () => {
  const [questioNo, setQuestioNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log("totalScore : ", totalScore);

  const handleClickA = (no, type) => {
    if (type === "EI") {
      // 기존 스코어에 더할 값을 계산 (기존값 + 배점)
      const addScore = totalScore[0].score + no;
      // 새로운 객체
      const newObject = { id: "EI", score: addScore };
      // splice 통해 새로운 객체를 할당 객체 자리에 넣어줌
      totalScore.splice(0, 1, newObject);
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject);
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject);
    } else if (type === "JP") {
      const addScore = totalScore[3].score + no;
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject);
    }

    setQuestioNo(questioNo + 1);
  };
  const handleClickB = (no, type) => {
    if (type === "EI") {
      // 기존 스코어에 더할 값을 계산 (기존값 + 배점)
      const addScore = totalScore[0].score + no;
      // 새로운 객체
      const newObject = { id: "EI", score: addScore };
      // splice 통해 새로운 객체를 할당 객체 자리에 넣어줌
      totalScore.splice(0, 1, newObject);
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject);
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject);
    } else if (type === "JP") {
      const addScore = totalScore[3].score + no;
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject);
    }
    setQuestioNo(questioNo + 1);
  };

  return (
    <Wrapper>
      <p>진행 현황 : {(questioNo / QuestionData.length) * 100}</p>
      <Title>{QuestionData[questioNo].title}</Title>
      <button
        onClick={() => {
          handleClickA(1, QuestionData[questioNo].type);
        }}
      >
        {QuestionData[questioNo].answera}
      </button>
      <button
        onClick={() => {
          handleClickB(0, QuestionData[questioNo].type);
        }}
      >
        {QuestionData[questioNo].answerb}
      </button>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
`;
