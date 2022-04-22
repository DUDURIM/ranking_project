import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRankFB } from "./redux/modules/ranking";

const Ranking = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadRankFB());
    }, []);

    const _user_data = useSelector(state => state.ranking.ranking);

    const user_data = _user_data.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <div>
            <div style={{ 
                position: "fixed", 
                top: 0, 
                left: 0, 
                borderBottom: "1px solid #888", 
                width: "100vw", 
                padding: "16px",
                background: "#dadafc",
                }}>
                {user_data.length} 명의 사람들 중에서 당신은?
            </div>
            <div style={{margin: "10vh 0vh"}}>
           
                {user_data.map((u, idx) => {
                    return (
                        <div key={idx} style={{
                            display: "flex",
                            border: "1px solid #888",
                            margin: "15px", 
                            padding: "16px", 
                            borderRadius: "16px"
                            }}>
                            <RankItem>
                            <RankNum>{idx+1}등</RankNum>
                            <RankUser>
                            <div>
                                <h3>{u.user_name}</h3>
                                <p>{u.message}</p>
                            </div>
                            </RankUser>
                            </RankItem>
                            </div>
                    );
                })}
            
            </div>
            <div style={{
                position: "relative", 
                bottom: "50px", 
                left: "0px", 
                }}>
                <button 
                style={{
                    width: "80px", 
                    height: "40px", 
                    margin: "16px",
                    border: "none",
                    borderRadius: "15px",
                    backgroundColor: "#dadafc",
                    }}
                onClick={() => {
                    history.push("/");
                }}>다시하기</button>
            </div>
        </div>
    )
}


const RankItem = styled.div`
  width: 80vw;
  margin: 8px auto;
  display: flex;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  align-items: center;
  background-color: ${(props) => (props.highlight ? "#ffd6aa" : "#ffffff")};
`;

const RankNum = styled.div`
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  padding: 0px 16px 0px 0px;
  border-right: 1px solid #ddd;
`;

const RankUser = styled.div`
  padding: 8px 16px;
  text-align: left;
  & > p {
    &:first-child > b {
      border-bottom: 2px solid #212121;
    }
    margin: 0px 0px 8px 0px;
  }
`;



export default Ranking;