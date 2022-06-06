import React from "react";
import Navigation from "../components/Navigation";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../../src/components/knowledges/Hobbies";
import Languages from "../../src/components/knowledges/Languages";
import OtherSkills from "../../src/components/knowledges/OtherSkills";

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;

