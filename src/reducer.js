// we want to be able to access user from wherever. 
// it creates a data layer with a user. 

export const initialState = {
    user: null,
};
export const actionType = {
    SET_USER: "SET_USER",
}

const reducer = (state,action) => {
    console.log(action)
switch(action.type) {
    case actionType.SET_USER:
    return {
            ...state,
            user:action.user,
        };
        default: 
        return state; 
    }
}
export default reducer 