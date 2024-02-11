import React from "react";
import BasicButtons from "../Elements/BasicButtons";
import { useNavigate } from 'react-router-dom';
import Giphy from '../images/giphy.gif';

function Landing(){
    const navigate = useNavigate();
    return <section className="web-page-layout">
            <h2>SPAWN INTO MIXMATCH</h2>
            <h2>SPAWN INTO MIXMATCH</h2>
        <div className="onboarding-page-container">
            <BasicButtons text="ENTER" id="Welcome" name="Welcome" onClick={()=> navigate ('/home')} overrides={{
                background: "#5A2366",
            }}/>
        </div>
    </section>
};

export default Landing;
