import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                        <h1> Jean Scratch </h1>
                        <h2> Développeur ReactJs </h2>
                        <div className="pdf">
                        <a href="./media/anisRahmani - CV.pdf">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;