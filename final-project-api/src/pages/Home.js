import {Jumbotron} from "reactstrap";
import React from "react";

import enigma from "../assets/images/enigma.png"


const Home = () => {
    return (

        <div className="jumbotron" >
            <Jumbotron>
                <div style={{position: 'absolute', left: '10%'}}>
                <h1 className="display-3">Hello!</h1>
                <p className="lead">Welcome to Enigma</p>
                <p className="lead">
                    {/*<ModalBuy/>*/}
                </p>
                </div>
                <img src={enigma} style={{position: 'relative', left: '40%', width: '31%'}}/>
            </Jumbotron>
        </div>
    )
}

export default Home