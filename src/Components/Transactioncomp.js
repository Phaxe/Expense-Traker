import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalStates'




const Transactioncomp = ({Trans}) => {
  const {deltTask, editTask , show} = useContext(GlobalContext);

  const sgin = Trans.amount > 0 ? '+' : '-'
  return (
    <div>
    
    <li className={Trans.amount > 0 ? 'plus' : 'minus'} onClick={() => editTask(Trans.id)}>
   <p className={Trans.completed ? 'completed' : ''}>{Trans.text}</p> <span>{sgin}${ Math.abs(Trans.amount)}</span><button onClick={() => deltTask(Trans.id)} className="delete-btn">x</button>
   <button className="edit-btn" onClick={() => show(Trans.id)}>Edit</button>
  </li>
    </div>
  )
}

export default Transactioncomp