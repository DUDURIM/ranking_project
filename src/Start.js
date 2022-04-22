import React from "react";
import img from "./IU-3.jpg";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/modules/user";

const Start = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const name_ref = React.useRef(null);
  const quiz_name = useSelector(state => state.quiz.quiz_name)

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={img}
        style={{
          width: "40vw",
          margin: "16px",
        }}
      />
      <h1 style={{ fontSize: "1.5em", lineHeight: "1.5" }}>
        나는 <span style={{
            backgroundColor: "#fef5d4",
            padding: "5px 10px",
            borderRadius: "30px"
        }}>{quiz_name}</span>에 대해 얼마나 알고 있을까?
      </h1>
      <input ref={name_ref} 
      style={{
          border: "1px solid #dadafc",
          borderRadius: "30px",
          padding: "10px", 
          width: "100%"
      }}/>
      <button 
      onClick={() => {
        dispatch(setName(name_ref.current.value));
        history.push("/quiz");
      }}
      style={{
          padding: "10px 36px",
          backgroundColor: "#dadafc",
          border: "#dadafc",
          borderRadius: "30px",
          margin: "36px 0px"
      }}>시작하기</button>
    </div>
  );
};

export default Start;