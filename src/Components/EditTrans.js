import React, {useState} from 'react'


const EditTrans = ({Trans}) => {
  const [text,setText] = useState("")

  const [amount,setAmount] = useState(0)

  return (
    <div>
      <h3>Edit transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
          value={Trans.text}
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
          value={Trans.amount}
          onChange={(e) => setAmount(e.target.value)}
         />
        </div>
        <button className="btn">Update</button>
      </form>
    </div>
  )
}

export default EditTrans