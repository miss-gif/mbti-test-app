import styled from "styled-components";
import { QuestionData } from "../assets/data/questiondata";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [questioNo, setQuestioNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log("totalScore : ", totalScore);

  const nav = useNavigate();

  const handleClick = (no, type) => {
    const newTotalScore = totalScore.map(item => {
      if (item.id === type) {
        return { ...item, score: item.score + no };
      }
      return item;
    });

    setTotalScore(newTotalScore);
    if (QuestionData.length !== questioNo + 1) {
      setQuestioNo(questioNo + 1);
    } else {
      nav("/result");
    }
  };

  return (
    <Wrapper>
      <p>진행 현황 : {(questioNo / QuestionData.length) * 100}</p>
      <Title>{QuestionData[questioNo].title}</Title>
      <button onClick={() => handleClick(1, QuestionData[questioNo].type)}>{QuestionData[questioNo].answera}</button>
      <button onClick={() => handleClick(0, QuestionData[questioNo].type)}>{QuestionData[questioNo].answerb}</button>
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
