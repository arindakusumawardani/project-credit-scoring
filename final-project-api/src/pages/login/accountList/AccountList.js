import React, {useEffect} from "react";
import {Container, Table} from "reactstrap";
import swal from "sweetalert";
import AccountRow from "./AccountRow";
import {findAllAccountAction, removeByIdAccountAction} from "../../../actions/signupAction";
import {connect} from "react-redux";
import Containers from '../../../components/Containers/Container'


function AccountList({
                         error,
                         isLoading,
                         accounts,
                         findAllAccountAction,
                         dispatchRemoveById,
                        isRemoved
                     }) {

    const onReload = () => {
        findAllAccountAction();

        console.log("onReload",findAllAccountAction)
    }

    const onDelete = (id) => {
        swal({
            title: "Are you sure to delete this data?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    dispatchRemoveById(id);
                    swal("Successful deleted", {
                        icon: "success"
                    });
                } else {
                    swal("Failed to delete")
                }
            });
    };

    useEffect(onReload, [findAllAccountAction])

    useEffect(() => {
        onReload()
    }, [findAllAccountAction])

    useEffect(() => {
        if(isRemoved) {
            onReload()
        }
        console.log("isRemove", isRemoved)
    }, [isRemoved])


    return (
        <div>
            {/*{*/}
            {/*    localStorage.getItem("roles") == "MASTER" ?*/}
            {/*        <>*/}
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
                                                <AccountRow onDeleted={() => onDelete(e.id)} key={i} data={e} number={(accounts.page * accounts.size) + 1 + i}/>
                                            )
                                        }) :
                                        <tr>
                                            <td colSpan="3"> Loading..</td>
                                        </tr>
                                }
                                </tbody>
                            </Table>
                        </Container>
            {/*        </>*/}
            {/*        :*/}
            {/*        <div>*/}
            {/*            <SignIn/>*/}
            {/*        </div>*/}
            {/*}*/}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        accounts: state.findAllAccountReducer.data || [],
        isLoading: state.findAllAccountReducer.isLoading,
        error: state.findAllAccountReducer.error || state.removeAccountByIdReducer.error,
        isRemoved: state.removeAccountByIdReducer
    }
}

const mapDispatchToProps = {
    findAllAccountAction,
    dispatchRemoveById: removeByIdAccountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList)
