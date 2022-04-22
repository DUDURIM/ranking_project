import React from "react";
import gu from "./IU-2.jpg";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

import Progress from "./Progress";

const Quiz = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list)


    const setAnser = (user_answer) => {
        dispatch(addAnswer(user_answer));

    };

    React.useEffect(() => {
        if (user_answer_list.length === quiz_list.length) {

            // const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;

            // const score = Math.round(_score);
            // console.log(_score, score);
            history.push("/score");


            return;
        }
    }, [user_answer_list]);

    if (user_answer_list.length === quiz_list.length) {
        return null;
    }


    return (
        <div>
            <ProgressBar>
                <HighLight width={(user_answer_list.length / quiz_list.length) * 100 + "%"}></HighLight>
                <Dot />
            </ProgressBar>
            <p>{user_answer_list.length + 1}번 문제</p>
            <h3>{quiz_list[user_answer_list.length].question}</h3>
            <img src={gu} />

            <div>
                <button onClick={() => {
                    setAnser(true);
                }}
                    style={{ 
                        width: "70px", 
                        height: "70px", 
                        margin: "16px",
                        border: "none",
                        borderRadius: "35px",
                        backgroundColor: "#dadafc",
                        }}>O</button>

                <button onClick={() => {
                    setAnser(false);
                }}
                    style={{ 
                        width: "70px", 
                        height: "70px", 
                        margin: "16px",
                        border: "none",
                        borderRadius: "35px",
                        backgroundColor: "#dadafc",
                        }}>X</button>
            </div>
        </div>
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


export default Quiz;