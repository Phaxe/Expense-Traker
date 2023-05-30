import { createContext, useReducer } from "react";
import AppReduce from './AppReduce'
const intialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20, isEditing: false , completed:false},
    { id: 2, text: "Salary", amount: 300, isEditing: false, completed:false },
    { id: 3, text: "Book", amount: -10, isEditing: false, completed:false },
    { id: 4, text: "Camera", amount: 150,isEditing: false, completed:false },
  ],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReduce, intialState);
    const deltTask = id => {
        dispatch({
            type: 'DELET_TASK',
            payload: id
        })
    }
    const addTask = transactions =>{
       dispatch({
        type: "ADD_TASK",
        payload: transactions
       })
    }
    const editTask = (id) =>{
        dispatch({
            type:"EDIT_TASK",
            payload: id
        })
    }
    const show = id =>{
        dispatch({
            type: "show",
            payload: id
        })
    }
    const update = (id,text) =>{
        dispatch({
            type:'update',
            payload: {id,text}
        })
    }
    return (
        <GlobalContext.Provider value={{Trans: state.transactions ,deltTask ,addTask, editTask, show, update}}>
            {children}
        </GlobalContext.Provider>
    )
}