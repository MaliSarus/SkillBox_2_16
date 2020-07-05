export const addComm = (text, date, user) =>{
    return {
        type: 'ADD_COMM',
        text,
        date,
        user
    }
}

export const delComm = (index) =>{
    return {
        type: 'DEL_COMM',
        index
    }
}