const comments =  (state, action) => {
    switch (action.type) {
        case 'ADD_COMM':
            const newComm = {
                text: action.text,
                date:`${action.date.getHours()}:${action.date.getMinutes()}`,
                user: action.user
            };
            localStorage.setItem('commentList',JSON.stringify([...state,newComm]));
            return [
                ...state,newComm
            ];

        case 'DEL_COMM':
            console.log(state);
            let newState = state.map((elem, index)=>{
               if(index !== action.index){
                   return elem
               }
               else{
                   return
               }
            });
            newState.splice(action.index, 1);
            console.log(newState);
            // // // state.splice(action.index,1);
            localStorage.setItem('commentList',JSON.stringify(newState));
             return [...newState];

        default:
            return state;
    }
}

export default comments;