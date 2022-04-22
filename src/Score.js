import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import IU1 from './IU-1.jpg';
import { useHistory } from "react-router-dom";

const Score = (props) => {
    const history = useHistory();
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    const score = Math.round(_score);
    return (
        <Container>
            <img src={IU1} style={{ width: "100%", height: "50%"}} />
            <h3>{props.name} 퀴즈에 대한 내 점수는<br/><br/><Highlight>{score}</Highlight>점</h3>
            <p>우와! 정말 똑똑해요!</p>
            <Button onClick={() => {
              history.push("/message");
            }}>
            {props.name}에게 한 마디
            </Button>
        </Container>
    )
}


export const Container = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.is_main ? "center" : "space-between"};
  padding: 16px;
  box-sizing: border-box;
  border: 1.5px solid gray;
  border-radius: 10px;
`;


export const Button = styled.button`
  padding: 10px 36px;
  background: #dadafc;
  border: #dadafc;
  border-radius: 30px;
  margin: 60px 0px 30px 0px;
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: #fef5d4;
  padding: 5px 10px;
  border-radius: 30px;
`;


export default Score;