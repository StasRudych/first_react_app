import React from "react";
import avatar from '../../assets/images/profile.png';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <img className="profile-image img-responsive pull-left" src={avatar}
                     alt="Stanislav Rudych"/>
                <div className="profile-content pull-left">
                    <h1 className="name">Stanislav Rudych</h1>
                    <h2 className="desc">Web App Developer</h2>
                    <ul className="social list-inline">
                        <li><a href="http://google.com"><i className="fa fa-twitter" /></a></li>
                        <li><a href="http://google.com"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="http://google.com"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="http://google.com"><i className="fa fa-github-alt" /></a></li>
                        <li className="last-item"><a href="http://google.com"><i className="fa fa-hacker-news" /></a></li>
                    </ul>
                </div>
                <a className="btn btn-cta-primary pull-right" href="http://google.com"><i className="fa fa-paper-plane"/>Contact Me</a>
            </div>
        </header>
    );
}


export default Header;