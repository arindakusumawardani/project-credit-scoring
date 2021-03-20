import React, {useEffect} from "react";
import {Container, Table} from "reactstrap";
import SignIn from "../SignIn";
import AccountRow from "./AccountRow";
import {findAllAccountAction} from "../../../actions/signupAction";
import {connect} from "react-redux";
import Containers from '../../../components/Containers/Container'


function AccountList({
                         error,
                         isLoading,
                         accounts,
                         findAllAccountAction
                     }) {

    const onReload = () => {
        findAllAccountAction();

        console.log("onReload",findAllAccountAction)
    }

    useEffect(onReload, [findAllAccountAction])


    return (
        <div>
            {
                localStorage.getItem("roles") == "MASTER" ?
                    <>
                        <Containers error={error} >

                        </Containers>
                        <Container fluid style={{width: "90%"}}>
                            <div className="d-flex justify-content-center mb-3">
                                <h1 style={{
                                    fontSize: "3vw",
                                    color: "#e42556",
                                    margin: "3%",
                                    textAlign: "center"
                                }}>Account List</h1>
                            </div>
                            <Table bordered style={{marginTop: '10px'}}>
                                <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Username</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Verification</th>
                                    <th>Activation</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    !isLoading ?
                                        accounts?.list?.map((e,i) => {

                                            return(
                                                <AccountRow key={i} data={e} number={(accounts.page * accounts.size) + 1 + i}/>
                                            )
                                        }) :
                                        <tr>
                                            <td colSpan="3"> Loading..</td>
                                        </tr>
                                }
                                </tbody>
                            </Table>
                        </Container>
                    </>
                    :
                    <div>
                        <SignIn/>
                    </div>
            }

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        accounts: state.findAllAccountReducer.data || [],
        isLoading: state.findAllAccountReducer.isLoading,
        error: state.findAllAccountReducer.error
    }
}

const mapDispatchToProps = {
    findAllAccountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList)
