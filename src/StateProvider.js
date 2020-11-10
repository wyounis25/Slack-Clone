import React, {createContext,useContext,useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {/* the children is our app */}
    {children}
    </StateContext.Provider>
);

//  useReducer listens to any data 
// the initialState is what the state initailize looks like 

export const useStateValue = () => useContext(StateContext);