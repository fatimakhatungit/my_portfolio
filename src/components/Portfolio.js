import React from 'react'

function Portfolio() {
  return (
    <>
        
 {/* Page Title Starts */}
<section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>my <span>portfolio</span></h1>
    <span className="title-bg">works</span>
</section>
 {/* Page Title Ends */}
 {/* Main Content Starts */}
<section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
    <div id="grid-gallery" className="container grid-gallery">
         {/* Portfolio Grid Starts */}
        <section className="grid-wrap">
            <ul className="row grid">
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-1.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-2.jpg" alt="Portolio Image" />
                        <div><span>Youtube Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-3.jpg" alt="Portolio Image" />
                        <div><span>Slider Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-4.jpg" alt="Portolio Image" />
                        <div><span>Local Video Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-5.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-6.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-7.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
                 {/* Portfolio Item Ends */}
                 {/* Portfolio Item Starts */}
                <li>
                    <figure>
                        <img src="img/projects/project-8.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
             {/* Portfolio Item End */}
             {/* Portfolio Item Start */}
                <li>
                    <figure>
                        <img src="img/projects/project-9.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                </li>
             {/* Portfolio Item End */}
            </ul>
        </section>
         {/* Portfolio Grid End */}
        {/* Portfolio Details Start */}
        <section className="slideshow">
            <ul>
             {/* Portfolio Item Detail Start */}

                <li>
                    <figure>
                     {/* Project Details Start */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <img src="img/projects/project-1.jpg" alt="Portolio Image" />
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Youtube Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe After Effects</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.videohive.net</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <div className="videocontainer">
                            <iframe className="youtube-video" src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" allowfullscreen></iframe>
                        </div>
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                     {/* Project Details Starts */}
                        <figcaption>
                            <h3>Slider Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Themeforest</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.themeforest.net</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* {/* Main Project Content Starts */} 
                        <div id="slider" className="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                                <li data-target="#slider" data-slide-to="2"></li>
                            </ol>
                             {/* The slideshow */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/projects/project-3.jpg" alt="slide 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/projects/project-2.jpg" alt="slide 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/projects/project-1.jpg" alt="slide 3"/>
                                </div>
                            </div>
                        </div>
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Local Video Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe Premium</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <video id="video" className="responsive-video" controls poster="img/projects/project-1.jpg">
                            <source src="img/projects/video.mp4" type="video/mp4"/>
                        </video>
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                     {/* Project Details End */}
                        {/* Main Project Content Start */}
                        <img src="img/projects/project-5.jpg" alt="Portolio Image" />
                     {/* Main Project Content End */}
                    </figure>
                </li>
             {/* Portfolio Item Detail End */}

             {/* Portfolio Item Detail Start */}
                <li>
                    <figure>
                     {/* Project Details Start */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <img src="img/projects/project-6.jpg" alt="Portolio Image" />
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <img src="img/projects/project-7.jpg" alt="Portolio Image" />
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <img src="img/projects/project-8.jpg" alt="Portolio Image" />
                         {/* Main Project Content Ends */}
                    </figure>
                </li>

                 {/* Portfolio Item Detail Ends */}

                 {/* Portfolio Item Detail Starts */}
                 
                <li>
                    <figure>
                         {/* Project Details Starts */}
                        <figcaption>
                            <h3>Image Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                                </div>
                            </div>
                        </figcaption>
                         {/* Project Details Ends */}
                         {/* Main Project Content Starts */}
                        <img src="img/projects/project-9.jpg" alt="Portolio Image" />
                         {/* Main Project Content Ends */}
                    </figure>
                </li>
                 {/* Portfolio Item Detail Ends */}
            </ul>
             {/* Portfolio Navigation Starts */}
            <nav>
                <span className="icon nav-prev"><img src="img/projects/navigation/left-arrow.png" alt="previous"/></span>
                <span className="icon nav-next"><img src="img/projects/navigation/right-arrow.png" alt="next"/></span>
                <span className="nav-close"><img src="img/projects/navigation/close-button.png" alt="close"/></span>
            </nav>
             {/* Portfolio Navigation Ends */}
        </section>
    </div>
</section>
 {/* Main Content Ends */}
    </>
  )
}

export default Portfolio