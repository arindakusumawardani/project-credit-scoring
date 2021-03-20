import React, {useState} from 'react';
import undraw_Updated_resume_re_q1or from "../../assets/images/undraw_Updated_resume_re_q1or.svg"
import {
    faEnvelope,
    faKey,
    faServer,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./login.css"
import {FormText, Input, Label, FormGroup, Button} from "reactstrap";
import Header from "../../components/navbar/NavbarAdmin";
import swal from 'sweetalert';

const SignUp = () => {

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [roleError, setRoleError] = useState('');
    const [profilePictureError, setProfilePictureError] = useState('');

    const onSubmit = () => {
        const isValid = validate();

        if (isValid) {
            const data = {
                fullName: fullName,
                username: username,
                email: email,
                password: password,
                role: role,
                profilePicture: profilePicture
            }
            //axios
        }
    }

    const validate = () => {
        let fullNameError = "";
        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let roleError = "";
        let profilePictureError = "";

        if (!fullName) {
            fullNameError = "*please enter fullname"
        }
        if (!username) {
            usernameError = "*please enter username"
        }
        if (!email) {
            emailError = "*please enter email"
        }
        if (!password) {
            passwordError = "*please enter password"
        }
        if (!role) {
            roleError = "*please select one"
        }
        if (!profilePicture) {
            profilePictureError = "*please upload photo"
        }
        return true;
    }

    const handleFullNameChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setFullName(inputValue)
        setFullNameError(isEmpty)
    }

    const handleUsernameChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setUsername(inputValue)
        setUsernameError(isEmpty)
    }

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setEmail(inputValue)
        setEmailError(isEmpty)
    }

    const handlePasswordChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setPassword(inputValue)
        setPasswordError(isEmpty)
    }

    const handleRoleChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setRole(inputValue)
        setRoleError(isEmpty)
    }

    const handleProfilPictureChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setProfilePicture(inputValue)
        setProfilePictureError(isEmpty)
    }

    return (
        <div>
            <Header/>

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src={undraw_Updated_resume_re_q1or} alt="" className="img-fluid mb-3 d-none d-md-block"/>
                        <h1 style={{color: "#e42256", fontSize: "55px"}}>Create new account</h1>
                    </div>

                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form>
                            <div className="row">

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                        </span>
                                    </div>
                                    <input
                                        required
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        onChange={(e) => handleFullNameChange(e)}
                                        className="form-control bg-white border-left-0 border-md"/><br/>
                                </div>
                                <div style={{
                                    marginLeft:"20px",
                                    marginTop:"-25px",
                                    marginBottom:"20px",
                                    color:"red"}}>
                                    {fullNameError}
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </span>
                                    </div>
                                    <input
                                        required
                                        id="username"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        onChange={(e) => handleUsernameChange(e)}
                                        className="form-control bg-white border-left-0 border-md"/>
                                </div>
                                <div style={{
                                    marginLeft:"20px",
                                    marginTop:"-25px",
                                    marginBottom:"20px",
                                    color:"red"}}>
                                    {usernameError}
                                </div>


                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </span>
                                    </div>
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={(e) => handleEmailChange(e)}
                                        className="form-control bg-white border-left-0 border-md"/><br/>
                                </div>
                                <div style={{
                                    marginLeft:"20px",
                                    marginTop:"-25px",
                                    marginBottom:"20px",
                                    color:"red"}}>
                                    {emailError}
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <FontAwesomeIcon icon={faKey}/>
                                        </span>
                                    </div>
                                    <input
                                        required
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => handlePasswordChange(e)}
                                        className="form-control bg-white border-left-0 border-md"/><br/>
                                </div>
                                <div style={{
                                    marginLeft:"20px",
                                    marginTop:"-25px",
                                    marginBottom:"20px",
                                    color:"red"}}>
                                    {passwordError}
                                </div>

                                {/*<div className="input-group col-lg-12 mb-4">*/}
                                {/*    <div className="input-group-prepend">*/}
                                {/*        <span className="input-group-text bg-white px-4 border-md border-right-0">*/}
                                {/*            <FontAwesomeIcon icon={faServer}/>*/}
                                {/*        </span>*/}
                                {/*    </div>*/}
                                {/*    <select id="job" name="jobtitle"*/}
                                {/*            className="form-control custom-select bg-white border-left-0 border-md">*/}
                                {/*        <option selected>---Choose the role---</option>*/}
                                {/*        <option value="1">Supervisor</option>*/}
                                {/*        <option value="2">Staff</option>*/}
                                {/*        onChange={(e) => handleRoleChange(e)}*/}
                                {/*    </select><br/>*/}
                                {/*</div>*/}
                                <div style={{
                                    marginLeft:"20px",
                                    marginTop:"-25px",
                                    marginBottom:"20px",
                                    color:"red"}}>
                                    {roleError}
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <FormGroup>
                                        <Label for="exampleFile">File</Label>
                                        <Input
                                            required
                                            type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                            max/min size 500kb.
                                        </FormText>
                                    </FormGroup>
                                </div>
                                <div style={{
                                    marginLeft: "20px",
                                    marginTop: "-25px",
                                    marginBottom: "20px",
                                    color: "red"
                                }}>
                                    {profilePictureError}
                                </div>

                                <div className="form-group col-lg-12 mx-auto mb-0">
                                    <Button style={{background: "#e42256"}} onClick={() => onSubmit()} href="/master/home" block>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;