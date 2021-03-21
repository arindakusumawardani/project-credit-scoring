import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {Container, Table} from "reactstrap";
import {connect} from "react-redux";
import {findByIdTransactionAction} from "../../actions/transactionAction";


function TransactionDetail({ findByIdDispatch ,transaction, isLoading}) {

    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        if(id && transaction) {

            setData({...transaction})
        }
    }, [transaction])

    useEffect(() => {
        if (id) {
            findByIdDispatch(id)
        }
    }, [id, findByIdDispatch])


    return(
        <div>
            <Container>
                <Table striped bordered hover size="sm">
                     <thead>
                     <tr style={{textAlign:"center"}}>
                         <th >Notes</th>
                         <th >income</th>
                         <th >outcome</th>
                         <th>loan</th>
                         <th >tenor</th>
                         <th>interestRate</th>
                         <th >mainLoan</th>
                         <th >interest</th>
                         <th>installmentTotal</th>
                         <th>installment</th>
                         <th>creditRatio</th>
                         <th>financeCriteria</th>
                         <th>employeeCriteria</th>
                     </tr>
                     </thead>
                    <tbody>
                    {!isLoading ?
                        <tr style={{textAlign: "center"}}>
                            <td>{transaction.notes}</td>
                            <td>{transaction.income}</td>
                            <td>{transaction.outcome}</td>
                            <td>{transaction.loan}</td>
                            <td>{transaction.tenor}</td>
                            <td>{transaction.nterestRate}</td>
                            <td>{transaction.mainLoan}</td>
                            <td>{transaction.interest}</td>
                            <td>{transaction.installmentTotal}</td>
                            <td>{transaction.installment}</td>
                            <td>{transaction.creditRatio}</td>
                            <td>{transaction.financeCriteria}</td>
                            <td>{transaction.employeeCriteria}</td>
                        </tr>:
                        <p>Loading...</p>}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

const mapStateToPros = (state) => {
    return{
        isLoading: state.findTransactionByIdReducer.isLoading || state.saveTransactionReducer.loading,
        transaction: state.findTransactionByIdReducer.data || []
    }
}

const mapDispatchToProps = {
    findByIdDispatch: findByIdTransactionAction
}

export default connect(mapStateToPros, mapDispatchToProps) (TransactionDetail)