import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalStates'
import Transactioncomp from './Transactioncomp';
import EditTrans from './EditTrans';




const TransactionsList = () => {
const {Trans} = useContext(GlobalContext);
   
  return (
    <div>
    <h3>History</h3>
    <ul className="list">
    {Trans.map((item) => item.isEditing ? 
      (
        <EditTrans Trans={item} key={Trans.id}/>
      ):(
        <Transactioncomp Trans={item} key={Trans.id}/>
      )
      )}
    
  
  </ul>
    </div>
  )
}

export default TransactionsList