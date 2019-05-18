import React from "react";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="secondary col-md-4 col-sm-12 col-xs-12">
            <aside className="info aside section">
                <div className="section-inner">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker" /><span className="sr-only">Location:</span>San
                                Francisco, US
                            </li>
                            <li><i className="fa fa-envelope-o" /><span className="sr-only">Email:</span><a
                                href="#">jameslee@website.com</a></li>
                            <li><i className="fa fa-link" /><span className="sr-only">Website:</span><a
                                href="#">http://www.website.com</a></li>
                            <li><i className="fa fa-link" /><span className="sr-only">About me page:</span><NavLink to="/page">Go to page</NavLink></li>
                            <li><i className="fa fa-link" /><span className="sr-only">Main page:</span><NavLink to="/main">Go to Main page</NavLink></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <aside className="skills aside section">
                <div className="section-inner">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            Intro about your skills goes here. Keep the list lean and only show your primary skillset.
                            You can always provide a link to your Linkedin or Coderwall profile so people can get more
                            info there.</p>
                        <div className="skillset">
                            <div className="item">
                                <h3 className="level-title">Python &amp; Django<span className="level-label"
                                                                                     data-toggle="tooltip"
                                                                                     data-placement="left"
                                                                                     data-animation="true"
                                                                                     title="You can use the tooltip to add more info...">Expert</span>
                                </h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="96%">
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h3 className="level-title">Javascript &amp; jQuery<span
                                    className="level-label">Expert</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="96%">
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h3 className="level-title">HTML5, CSS3, SASS &amp; LESS<span
                                    className="level-label">Expert</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="96%">
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h3 className="level-title">Ruby on Rails<span className="level-label">Pro</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="85%">
                                    </div>
                                </div>
                            </div>
                            <p><a className="more-link" href="#"><i className="fa fa-external-link" /> More on
                                Coderwall</a></p>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="testimonials aside section">
                <div className="section-inner">
                    <h2 className="heading">Testimonials</h2>
                    <div className="content">
                        <div className="item">
                            <blockquote className="quote">
                                <p><i className="fa fa-quote-left" />James is an excellent software engineer and he is
                                    passionate about what he does. You can totally count on him to deliver your
                                    projects!</p>
                            </blockquote>
                            <p className="source"><span className="name">Tim Adams</span><br/><span className="title">Curabitur commodo</span>
                            </p>
                        </div>
                        <p><a className="more-link" href="#"><i className="fa fa-external-link" /> More on
                            Linkedin</a></p>
                    </div>
                </div>
            </aside>
            <aside className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><i className="fa fa-graduation-cap" /> MSc Psychology and Computer
                                Science</h3>
                            <h4 className="university">University College London <span
                                className="year">(2011-2012)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fa fa-graduation-cap" /> BSc Computer Science</h3>
                            <h4 className="university">University of Bristol <span className="year">(2008-2011)</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="languages aside section">
                <div className="section-inner">
                    <h2 className="heading">Languages</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="item">
                                <span className="title"><strong>English:</strong></span>
                                <span className="level">Native Speaker <br className="visible-xs"/><i
                                    className="fa fa-star" /> <i className="fa fa-star" /> <i
                                    className="fa fa-star"/> <i className="fa fa-star" /> <i
                                    className="fa fa-star" /> </span>
                            </li>
                            <li className="item">
                                <span className="title"><strong>Spanish:</strong></span>
                                <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i
                                    className="fa fa-star" /> <i className="fa fa-star" /> <i
                                    className="fa fa-star" /> <i className="fa fa-star-half" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>

            <aside className="blog aside section">
                <div className="section-inner">
                    <h2 className="heading">Latest Blog Posts</h2>
                    <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss" target="_blank">jQuery
                        RSS plugin</a> to pull in your blog post feeds.</p>
                    <div id="rss-feeds" className="content">

                    </div>
                </div>
            </aside>
        </div>
    );
}


export default Sidebar;