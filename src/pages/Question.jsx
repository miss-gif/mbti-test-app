import styled from "styled-components";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  return (
    <Wrapper>
      <Title>{QuestionData[0].title}</Title>
      <button>{QuestionData[0].answera}</button>
      <button>{QuestionData[0].answerb}</button>
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
