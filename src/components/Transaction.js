import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

function Transaction(props) {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = props.transaction.amount < 0 ? '-' : '+';
    const className = props.transaction.amount < 0 ? 'minus' : 'plus';

    return (
        
           <li className={className}> {props.transaction.text} 
            <span>{sign}${Math.abs(props.transaction.amount)}</span>
               <button className="delete-btn" onClick={()=> deleteTransaction(props.transaction.id)}>x</button>
             </li>   
        
    )
}

export default Transaction
