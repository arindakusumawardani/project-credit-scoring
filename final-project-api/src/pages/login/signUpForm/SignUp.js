import React, {useEffect, useState} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import undraw_Updated_resume_re_q1or from "../../../assets/images/undraw_Updated_resume_re_q1or.svg"
import {
    faEnvelope,
    faKey,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../login.css"
import {Input, Label, FormGroup, Button, Container, Form, Col} from "reactstrap";
import {findAccountByIdAction, saveAccountAction} from "../../../actions/signupAction";
import {connect} from "react-redux";

const SignUp = ({saveDispatch, error, saveAccount, users, update, isLoading}) => {
    const {id} = useParams()
    const [redirect] = useState(false)
    const [photo, setPhoto] = useState({
        profilePicture: {}
    })
    const [data, setData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        profilePicture: ""
    })
    const history = useHistory()

    useEffect(() => {
        if (id !== data.id) {
            findAccountByIdAction(id);
            setData(users)

            console.log("useEffect", users)
        }
    }, [users])

    useEffect(() => {
        if (saveAccount) {
            history.push('/users')
            // console.log("ini saved", saveAccount)
        }
    }, [saveAccount, history])

    const handlePhoto = async (e) => {
        let name = e.target.name
        let value = e.target.files[0]
        setPhoto({...photo, [name]: value})

        const formData = new FormData()
        formData.append("file", value)
        formData.append("upload_preset", "ve2u0qv8")

        const response = await fetch("https://api.cloudinary.com/v1_1/nielnaga/image/upload", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        }).then(res => res.json())
            .then(res => {
                console.log(res.url)
                setData({
                    ...data,
                    [name]: res.url
                })
            })
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({...data, [name]: value})

        console.log("ini handle change", data)
    }

    const handleRoles = (e) => {
        setData({...data, roles: e})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveDispatch(data)

        console.log("handle submit", data)
    }

    if (redirect === true) {
        return <Redirect to="/users"/>
    }

    return (
        <div>
            <Container error={error}>
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                            <img src={undraw_Updated_resume_re_q1or} alt=""
                                 className="img-fluid mb-3 d-none d-md-block"/>
                            <h1 style={{color: "#e42256", fontSize: "55px"}}>Create new account</h1>
                        </div>

                        <div className="col-md-7 col-lg-6 ml-auto">

                            {!isLoading ?
                                <Form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="input-group col-lg-12 mb-4">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                        </span>
                                            </div>
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={data?.fullName || ""}
                                                type="text"
                                                name="fullName"
                                                placeholder="Full Name"
                                                className="form-control bg-white border-left-0 border-md"/><br/>
                                        </div>

                                        <div className="input-group col-lg-12 mb-4">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </span>
                                            </div>
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={data?.username || ""}
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                className="form-control bg-white border-left-0 border-md"/>
                                        </div>

                                        <div className="input-group col-lg-12 mb-4">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </span>
                                            </div>
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={data?.email || ""}
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                className="form-control bg-white border-left-0 border-md"/><br/>
                                        </div>

                                        <div className="input-group col-lg-12 mb-4">
                                            <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                            </div>
                                            <input
                                                required
                                                onChange={handleChange}
                                                value={data?.password}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control bg-white border-left-0 border-md"/><br/>
                                        </div>

                                        <div className="input-group col-lg-12 mb-4">
                                            {/*            <div className="input-group-prepend">*/}
                                            {/*<span className="input-group-text bg-white px-4 border-md border-right-0">*/}
                                            {/*    <FontAwesomeIcon icon={faServer}/>*/}
                                            {/*</span>*/}
                                            {/*</div>*/}
                                            {/*<DropdownList*/}
                                            {/*    data={[*/}
                                            {/*        {value: "STAFF", label: "STAFF"},*/}
                                            {/*        {value: "SUPERVISOR", label: "SUPERVISOR"}*/}
                                            {/*    ]}*/}
                                            {/*    value={data?.roles[0].name}*/}
                                            {/*    placeholder="Select Role"*/}
                                            {/*    handleDropdown={handleRoles}*/}
                                            {/*/>*/}

                                            {/*<select id="job" name="jobtitle"*/}
                                            {/*        className="form-control custom-select bg-white border-left-0 border-md">*/}
                                            {/*    <option selected>---Choose the role---</option>*/}
                                            {/*    <option value="1">Supervisor</option>*/}
                                            {/*    <option value="2">Staff</option>*/}
                                            {/*    onChange={(e) => handleRoleChange(e)}*/}
                                            {/*</select><br/>*/}
                                            </div>

                                            <div className="input-group col-lg-12 mb-4">
                                                <FormGroup>
                                                    <Label for="profilePicture" sm={2}>Profile Photo</Label>
                                                    <Col sm={10}>
                                                        <Input
                                                            required
                                                            type="file"
                                                            name="profilePicture"
                                                            onChange={handlePhoto}
                                                            accept="image/jpeg, image/png"/>
                                                    </Col>
                                                </FormGroup>
                                        </div>

                                        <div className="form-group col-lg-12 mx-auto mb-0">
                                            <Button style={{background: "#e42256"}}
                                                      block>
                                            <span className="font-weight-bold"
                                                  style={{color: "#ffff"}}>CREATE ACCOUNT</span>
                                            </Button>
                                        </div>
                                        <div>
                                            <p className="text-muted font-weight-bold">
                                                Already have account?
                                                <a href="/" className="text-primary ml-2">Sign In</a>
                                            </p>
                                            <hr/>
                                        </div>
                                    </div>
                                </Form>
                                :
                                <div>Loading...</div>
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        users: state.findAccountByIdReducer.data,
        saveAccount: state.saveAccountReducer.data,
        error: state.saveAccountReducer.err,
        isLoading: state.findAccountByIdReducer.isLoading,
        update: state.updateAccountReducer
    }
}

const mapDispatchToProps = {
    saveDispatch: saveAccountAction, findAccountByIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);