import React, { useContext, useState } from "react";

import uuid, {uuidv4 as v4} from 'react-uuid'
import { GlobalContext } from "../Context/GlobalStates";
const Transaction = () => {
 const [text,setText] = useState("")

 const [amount,setAmount] = useState(0)

 const {addTask} = useContext(GlobalContext)
 const handleSubmit = e =>{
  e.preventDefault();
  const newTask={
    id:uuid(),
    text,
    amount: +amount
  }
  addTask(newTask)
  setText("")
  setAmount(0)
 }

 
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}  >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
          value={text}
             onChange={(e) => setText(e.target.value)} 
             type="text"
             placeholder="Enter text..."
            
              />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
          type="number"  
          placeholder="Enter amount..." 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
         />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
