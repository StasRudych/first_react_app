import React from "react";
import Posts from './Posts/Posts';

const Content = (props) => {
    return(
        <div className="primary col-md-8 col-sm-12 col-xs-12">
            <Posts posts={props.posts}/>



            <section className="latest section">
                <div className="section-inner">
                    <h2 className="heading">Latest Projects</h2>
                    <div className="content">
                        <div className="item featured text-center">
                            <h3 className="title"><a
                                href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-products-velocity/"
                                target="_blank">KickStarter - Velocity</a></h3>
                            <p className="summary">A responsive Bootstrap template designed for digital products</p>
                            <div className="featured-image">
                                <a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-products-velocity/"
                                   target="_blank">
                                    <img className="img-responsive project-image"
                                         src="http://site.autosdelka.com/images/projects/project-featured.png" alt="project name"/>
                                </a>
                                <div className="ribbon">
                                    <div className="text">New</div>
                                </div>
                            </div>
                            <div className="desc text-left">
                                <p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor
                                    eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit
                                    pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                    laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et
                                    iusto odio dignissimos ducimus.</p>
                            </div>
                            <a className="btn btn-cta-secondary"
                               href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-products-velocity/"><i className="fa fa-thumbs-o-up" /> Back my project</a>
                        </div>
                        <hr className="divider"/>
                        <div className="item row">
                            <a className="col-md-4 col-sm-4 col-xs-12"
                               href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
                               target="_blank">
                                <img className="img-responsive project-image" src="http://site.autosdelka.com/images/projects/project-5.png"
                                     alt="project name"/>
                            </a>
                            <div className="desc col-md-8 col-sm-8 col-xs-12">
                                <h3 className="title"><a
                                    href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
                                    target="_blank">Atom - Designed for Mobile Apps</a></h3>
                                <p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus
                                    a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu
                                    suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non
                                    turpis.</p>
                                <p><a className="more-link"
                                      href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
                                      target="_blank"><i className="fa fa-external-link" /> Find out more</a></p>
                            </div>
                        </div>
                        <div className="item row">
                            <a className="col-md-4 col-sm-4 col-xs-12"
                               href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                               target="_blank">
                                <img className="img-responsive project-image" src="http://site.autosdelka.com/images/projects/project-4.png"
                                     alt="project name"/>
                            </a>
                            <div className="desc col-md-8 col-sm-8 col-xs-12">
                                <h3 className="title"><a
                                    href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                                    target="_blank">DevStudio - Designed for Web Development Agencies</a></h3>
                                <p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus
                                    a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu
                                    suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non
                                    turpis.</p>
                                <p><a className="more-link"
                                      href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                                      target="_blank"><i className="fa fa-external-link" /> Find out more</a></p>
                            </div>
                        </div>
                        <div className="item row">
                            <a className="col-md-4 col-sm-4 col-xs-12"
                               href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
                               target="_blank">
                                <img className="img-responsive project-image" src="http://site.autosdelka.com/images/projects/project-1.png"
                                     alt="project name"/>
                            </a>
                            <div className="desc col-md-8 col-sm-8 col-xs-12">
                                <h3 className="title"><a
                                    href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
                                    target="_blank">Tempo - Designed for Startups</a></h3>
                                <p>You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus
                                    a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu
                                    suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non
                                    turpis.</p>
                                <p><a className="more-link"
                                      href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
                                      target="_blank"><i className="fa fa-external-link" /> Find out more</a></p>
                            </div>
                        </div>
                        <div className="item row">
                            <a className="col-md-4 col-sm-4 col-xs-12"
                               href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                               target="_blank">
                                <img className="img-responsive project-image" src="http://site.autosdelka.com/images/projects/project-2.png"
                                     alt="project name"/>
                            </a>
                            <div className="desc col-md-8 col-sm-8 col-xs-12">
                                <h3 className="title"><a
                                    href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                                    target="_blank">Delta - Designed for Mobile Apps</a></h3>
                                <p> You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet.
                                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                                    libero, sit amet adipiscing sem neque sed ipsum.</p>
                                <p><a className="more-link"
                                      href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                                      target="_blank"><i className="fa fa-external-link" /> Find out more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="experience section">
                <div className="section-inner">
                    <h2 className="heading">Work Experience</h2>
                    <div className="content">
                        <div className="item">
                            <h3 className="title">Co-Founder & Lead Developer - <span className="place"><a href="#">Startup Hub</a></span>
                                <span className="year">(2014 - Present)</span></h3>
                            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                                laoreet. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                                amet orci eget eros faucibus tincidunt.</p>
                        </div>
                        <div className="item">
                            <h3 className="title">Software Engineer - <span className="place"><a
                                href="#">Google</a></span> <span className="year">(2013 - 2014)</span></h3>
                            <p>Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu
                                suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh.
                                Donec sodales sagittis magna.</p>
                        </div>
                        <div className="item">
                            <h3 className="title">Software Engineer - <span className="place"><a
                                href="#">eBay</a></span> <span className="year">(2012 - 2013)</span></h3>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                                adipiscing sem neque sed ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Content;