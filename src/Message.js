import React from "react";
import IU4 from "./IU-4.jpg";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";


import { setMessage } from "./redux/modules/user";
import {addRank, addRankFB} from "./redux/modules/ranking";
import styled from "styled-components";

const Message = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const message_ref = React.useRef(null);
    
    const user_name = useSelector((state) => state.user.user_name);
    const quiz_name = useSelector(state => state.quiz.quiz_name);
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    const score = Math.round(_score);

    return (
        <div>
           <img 
           style={{ 
            width: "350px", 
            height: "250px", 
            marginTop: "20px",
            border: "none",
            borderRadius: "50px",
            }}
           src={IU4} />
           <h3>{quiz_name}에게 남기는 한 마디</h3>

           <input ref={message_ref}/>
           <button 
                style={{
                        width: "200px", 
                        height: "30px", 
                        margin: "16px",
                        border: "none",
                        borderRadius: "20px",
                        backgroundColor: "#dadafc",
                            }}
           onClick={async () => {
               dispatch(setMessage(message_ref.current.value));
                dispatch(addRankFB({
                    score: score, 
                    user_name: user_name, 
                    message: message_ref.current.value,
                }));
               
            //    dispatch(addRank({ 
            //         score: score, 
            //         user_name: user_name, 
            //         message: message_ref.current.value,
            //          })
            //          );

                    //  const docRef = await addDoc(collection(db, "ranking"),{
                    //     score: score, 
                    //     user_name: user_name, 
                    //     message: message_ref.current.value,  
                    //  });
               history.push("/ranking");
           }}>남기고 랭킹 보러가기</button>
        </div>
    )
}

export default Message;