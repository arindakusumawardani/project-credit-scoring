import React from 'react'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";

const TransactionRow = ({data, onUpdate, number}) => {
    return (

        <tr>
            <td>{number}</td>
            <td>{data.customer.name}</td>
            <td>{data.customer.employeeType} </td>
            <td>{data.needType}</td>
            <td>{data.loan}</td>
            <td>{data.tenor}</td>
            <td>{data.interestRate}</td>
            <td>
                <Button href={`/transaction/detail/${data.id}`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                </Button>{' '}
                <Button onClick={onUpdate} href={`/transaction/${data.id}/edit`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </Button>{' '}
                <Button style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>{' '}
            </td>
        </tr>
    )
}

export default TransactionRow;

