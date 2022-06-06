import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/anisRahmani.jpeg"
                        
                        alt="profil-pic" />
                    <h3>Anis Rahmani</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="navActive" >
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competence" activeClassName="navActive" >
                        <i className="fas fa-mountain"></i>
                        <span>Compétence</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/Portfolio" activeClassName="navActive" >
                        <i className="fas fa-image"></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/contact" activeClassName="navActive" >
                        <i className="fa fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.facebook.com" rel="noopener noreferre">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" rel="noopener noreferre">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" rel="noopener noreferre">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" rel="noopener noreferre">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="signature" >
                <p> fromScratch - 2022 </p>
            </div>
        </div>
    );
};

export default Navigation;