import React from 'react'
import { Link } from 'react-router-dom';

const Transactions = ({_id, amount, rate, bolivares, created_at, classification}) => {
    return (
        
        <tr key={_id}>
            <td> <Link to={"/transaction/" + _id}> GO </Link></td>
            <td>{amount}</td>
            <td>{rate}</td>
            <td>{bolivares}</td>
            <td>{created_at}</td>
            <td>{classification}</td>
        </tr> 
        
        )
        
    }

export default Transactions