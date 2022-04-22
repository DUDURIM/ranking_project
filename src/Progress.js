import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
    const quiz_list = useSelector(state => state.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);

    return (
        <ProgressBar>
            <HighLight width={(user_answer_list.length/quiz_list.length) * 100 + "%"}></HighLight>
            <Dot/>
        </ProgressBar>
    );
};

const ProgressBar = styled.div`
  width: 80%;
  margin: 20px auto;
  background: #eee;
//   width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #e2432e;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #e2432e;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export default Progress;