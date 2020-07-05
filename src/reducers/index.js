const comments =  (state, action) => {
    switch (action.type) {
        case 'ADD_COMM':
            const newComm = {
                text: action.text,
                date:`${action.date.getHours()}:${action.date.getMinutes()}`,
                user: action.user
            };
            state.push(newComm);
            localStorage.setItem('commentList',JSON.stringify(state));
            return [
                ...state,
            ];

        case 'DEL_COMM':
            state.splice(action.index,1);
            localStorage.setItem('commentList',JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
}

export default comments;