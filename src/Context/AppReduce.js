export default (state,action)=>{
    switch(action.type){
        case "DELET_TASK":
           return{
            ...state,
            transactions: state.transactions.filter(item => item.id !== action.payload)
           }
           case "ADD_TASK":
            return{
                ...state,
               transactions: [action.payload, ...state.transactions]
            }
            case "EDIT_TASK":
                return{
                    ...state,
                    transactions: state.transactions.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
                }
                case "show":
                    return{
                        ...state,
                        transactions: state.transactions.map((item) => item.id === action.payload ?
                        {...item, isEditing: !item.isEditing }: item)
                    }
                case "update":
                return{
                    ...state,
                    transactions: state.transactions.map((item) => item.id === action.payload.id  ? 
                    {item, action.payload.text, isEditing: !item.isEditing} : item)
                   
                }


        default:
            return state
    }

}