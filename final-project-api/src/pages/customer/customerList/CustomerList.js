import React, {useEffect} from 'react'
import CustomerRow from "./CustomerRow"
import {findAllCustomerAction} from '../../../actions/customerAction'
import {connect} from "react-redux"
import {Button, Table, Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import Containers from "../../../components/Containers/Container";
import HeaderMaster from "../../../components/navbar/NavbarMaster";
import SignIn from "../../login/SignIn";

function CustomerList({
                          error,
                          isLoading,
                          customers,
                          findAllCustomerAction
                      }) {

    const onReload = () => {
        findAllCustomerAction();
    };

    useEffect(onReload, [findAllCustomerAction])

    return (

        <div>
            {
                localStorage.getItem("roles") == "MASTER" ?
                    <>
                        <Containers error={error}>
                            <HeaderMaster/>
                            <Container fluid style={{width:"90%"}}>
                                <div>
                                    <div className="d-flex justify-content-center mb-3">
                                        <h1 style={{fontSize:"3vw", color:"#e42556", margin:"3%", textAlign:"center"}}>Customer List</h1>
                                    </div>

                                    <Button href="/customer/form" style={{background:"#e42256"}}>
                                        <FontAwesomeIcon icon={faSave}/> Add
                                    </Button>
                                    <Table bordered style={{marginTop: '10px'}}>
                                        <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Full Name</th>
                                            <th>Id Card</th>
                                            <th>Email</th>
                                            {/*<th>Address</th>*/}
                                            <th>Employee Type</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            !isLoading ?
                                                customers?.list?.map((e, i) => {

                                                    return (
                                                        <CustomerRow key={i} data={e} number={(customers.page * customers.size) + 1 + i} />
                                                    )
                                                })
                                                :
                                                <tr>
                                                    <td colSpan="3"> Loading..</td>
                                                </tr>
                                        }
                                        </tbody>
                                    </Table>
                                </div>
                            </Container>
                        </Containers>
                    </>
                    :
                    <div>
                        <SignIn/>
                    </div>
            }
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllCustomerReducer.error,
        customers: state.findAllCustomerReducer.data || [],
        isLoading: state.findAllCustomerReducer.isLoading
    }
}

const mapDispatchToProps = {
    findAllCustomerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
