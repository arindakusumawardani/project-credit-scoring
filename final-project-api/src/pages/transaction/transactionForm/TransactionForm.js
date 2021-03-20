import {InputGroupText, InputGroup, FormGroup, Form, Input, Label, Button, Col} from "reactstrap";
import Container from "../../../components/Containers/Container";
import {Redirect, useHistory, useParams} from 'react-router-dom'
import {saveTransactionAction} from "../../../actions/transactionAction";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import {findCustomerByIdAction} from "../../../actions/customerAction";
import HeaderMaster from "../../../components/navbar/NavbarMaster";
import DropdownList from "../../../components/DropdownList/DropdownList";

const TransactionForm = ({savedTransaction, isLoading, error, saveTransactionAction, customer, findCustomerByIdAction}) => {
    const {id} = useParams()
    const [redirect] = useState(false)
    const [data, setData] = useState({
        customer: ""
    })
    const history = useHistory()

    const handleCustomer = () => {
        setData({
            ...data,
            customer: customer.id
        })
    }

    const handleNeed = (e) => {
        setData({...data, needType: e})
    }

    useEffect(() => {
        if (id !== data.customer) {
            findCustomerByIdAction(id);
            setData({
                ...data,
                customer: id
            })
        }
    }, [])

    useEffect(() => {
        console.log(`CUSTOMER `, customer, `DATA `, data)
    }, [data])

    useEffect(() => {
        if (savedTransaction) {
            history.push('/master/transaction')
        }
    }, [savedTransaction, history])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveTransactionAction(data)
        console.log(data)
    }
    if (redirect === true) {
        return <Redirect to='/transaction'/>
    }

    return (
        <div>
            <Container error={error}/>
            <HeaderMaster/>
            <div className="container" style={{marginTop: "10px"}}>
                <h1 style={{fontSize: "3vw", color: "#e42556", margin: "3%", textAlign: "center"}}>Form Transaction</h1>
                <div className="col-md-13">
                    <div className="form form-container">
                        {!isLoading ?
                            <Form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Label for="notes" sm={2}>Note</Label>
                                    <Col sm={10}>
                                        <Input
                                            required
                                            onChange={handleChange}
                                            value={data?.notes || ''}
                                            type="text"
                                            name="notes"
                                            id="notes"
                                            placeholder="input note"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="income" sm={2}>Income</Label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <InputGroupText>Rp</InputGroupText>
                                            <Input required
                                                   name="income"
                                                   onChange={handleChange}
                                                   value={data?.income || ''}
                                                   placeholder="income"
                                                   type="number"/>
                                            <InputGroupText>.00</InputGroupText>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="outcome" sm={2}>Outcome</Label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <InputGroupText>Rp</InputGroupText>
                                            <Input required
                                                   name="outcome"
                                                   onChange={handleChange}
                                                   value={data?.outcome || ''}
                                                   placeholder="outcome"
                                                   type="number"/>
                                            <InputGroupText>.00</InputGroupText>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="loan" sm={2}>Loan</Label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <InputGroupText>Rp</InputGroupText>
                                            <Input required
                                                   onChange={handleChange}
                                                   value={data?.loan || ''}
                                                   placeholder="loan"
                                                   type="number"
                                                   name="loan"/>
                                            <InputGroupText>.00</InputGroupText>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="tenor" sm={2}>Tenor</Label>
                                    <Col sm={10}>
                                        <Input required
                                               onChange={handleChange}
                                               type="number"
                                               value={data?.tenor || ''}
                                               name="tenor"
                                               placeholder="tenor"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="interestRate" sm={2}>Interest Rate</Label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <Input
                                                required
                                                onChange={handleChange}
                                                name="interestRate"
                                                value={data?.interestRate || ''}
                                                placeholder="interest rate" min={0} max={100} type="number" step="1"/>
                                            <InputGroupText>%</InputGroupText>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="select" sm={2}>Need Type</Label>
                                    <Col sm={10}>
                                        <DropdownList
                                            data={[
                                                {value: "CAPITAL", label: "CAPITAL"},
                                                {value: "CONSUMPTIVE", label: "CONSUMPTIVE"},
                                                {value: "INVESTMENT", label: "INVESTMENT"}
                                            ]}
                                            value={data?.needType}
                                            placeholder="Select Need Type"
                                            handleDropdown={handleNeed}
                                        />
                                    </Col>
                                </FormGroup>
                            <FormGroup check row>
                                    <Col sm={{size: 10, offset: 2}}>
                                        <Button style={{background: "#e42256"}}>
                                            <FontAwesomeIcon icon={faSave}/>
                                            {id > 0 ? "  Update" : "  Submit"}
                                        </Button> {' '}
                                        <Button href="/customer" style={{background: "#e42256"}}>
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                            Cancel
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form> :
                            <div>Loading...</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customer: state.findCustomerByIdReducer.data,
        savedTransaction: state.saveTransactionReducer.data,
        isLoading: state.saveTransactionReducer.isLoading,
        error: state.saveTransactionReducer.error
    }
}

const mapDispatchToProps = {findCustomerByIdAction, saveTransactionAction}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)