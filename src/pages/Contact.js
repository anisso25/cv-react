import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1> Contactez-moi </h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span> Bordeaux </span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0675641739">
                                    <span className="clickInput" onClick={() => (
                                        alert('Téléphone copié !'))}>
                                            0675 64 17 39
                                    </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <CopyToClipboard text="anis.rahmani095@gmail.com">
                                    <span className="clickInput" onClick={()=> (
                                        alert('E-mail copié !'))}>
                                            anis.rahmani095@gmail.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com" rel="noopener noreferre">
                            <h4>linkedin</h4>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.github.com" rel="noopener noreferre">
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.twitter.com" rel="noopener noreferre">
                            <h4>Twiter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.codePen.com" rel="noopener noreferre">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;