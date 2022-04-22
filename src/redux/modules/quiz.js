const ADD_ANSWER = "quiz/ADD_ANSWER";

export const addAnswer = (user_answer) => {
    return {type: ADD_ANSWER, user_answer};
}


const initialState = { 
    quiz_name: "IU",  
    quiz_list: [
        { question: "IU는 40살이다.", answer: false },
        { question: "IU는 25살이다.", answer: false },
        { question: "IU는 여자다.", answer: true },
        { question: "IU는 남자다.", answer: false },
        { question: "IU는 개그우먼이다.", answer: false },
        { question: "IU는 홍씨이다.", answer: false },
    ],
    user_answer_list: [],
};

export default function reducer(state =initialState, action={}){
    switch(action.type) {
        case "quiz/ADD_ANSWER": {
            console.log(action);
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];

            console.log(new_user_answer_list);
            return {...state, user_answer_list: new_user_answer_list};
        }
        
        default:
        return state;
    }
}