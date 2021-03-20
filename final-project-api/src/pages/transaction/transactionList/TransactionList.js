import {Button, Container, Table} from "reactstrap";
import Containers from '../../../components/Containers/Container'
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {findAllTransactionAction} from "../../../actions/transactionAction";
import TransactionRow from "./TransactionRow";
import HeaderMaster from "../../../components/navbar/NavbarMaster";

function TransactionList({
                             isLoading,
                             transactions,
                             error,
                             findAllTransactionAction
                         }) {

    const onReload = () => {
        findAllTransactionAction();
    };

    useEffect(onReload, [findAllTransactionAction])

    return (
        <Containers error={error}>
            <HeaderMaster/>
            <Container fluid style={{width:"90%"}}>
                <div>
                    <div className="d-flex justify-content-center mb-3">
                        <h1 style={{fontSize:"3vw", color:"#e42556", margin:"3%", textAlign:"center"}}>Transaction List</h1>
                    </div>

                    <Table bordered style={{marginTop: '10px'}}>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Employee Type</th>
                            <th>Need Type</th>
                            <th>Loan</th>
                            <th>Tenor</th>
                            <th>Interest Rate</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {console.log("TESSSST", transactions)}
                        {
                            !isLoading?
                                transactions?.list?.map( (e, i) => {
                                    return (
                                        <TransactionRow key={i} data={e} number={(transactions.page*transactions.size)+1 + i} />
                                    )
                                }):
                                <tr>
                                    <td colSpan="3"> Loading..</td>
                                </tr>
                        }
                        </tbody>
                    </Table>
                </div>

            </Container>
        </Containers>
    )
};

const mapStateToProps = (state) => {
    return {
        error: state.finAllTransactionReducer.error,
        transactions: state.finAllTransactionReducer.data || [],
        isLoading: state.finAllTransactionReducer.isLoading
    }
}

const mapDispatchToProps = {
    findAllTransactionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);