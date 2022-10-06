import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaRegEnvelopeOpen, FaComments } from "react-icons/fa";
function Header() {
  return (
        <>
<header className="header" id="navbar-collapse-toggle">
   {/* Fixed Navigation Starts  */}
    <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
        <li className="icon-box active">
            <i className="fa fa-home"><FaHome/></i>
            <Link to="/">
                <h2>Home</h2>
            </Link>
        </li>
        <li className="icon-box">
            <i className="fa fa-user"><FaUser/></i>
            <Link to="/about">
                <h2>About</h2>
            </Link>
        </li>
        <li className="icon-box">
            <i className="fa fa-FaBriefcase"><FaBriefcase/></i>
            <Link to="/portfolio">
                <h2>Portfolio</h2>
            </Link>
        </li>
        <li className="icon-box">
            <i className="fa fa-envelope-open"><FaRegEnvelopeOpen/></i>
            <Link to="/contact">
                <h2>Contact</h2>
            </Link>
        </li>
        <li className="icon-box">
            <i className="fa fa-comments"><FaComments/></i>
            <Link to="/blog">
                <h2>Blog</h2>
            </Link>
        </li>
    </ul>
    {/* Fixed Navigation Ends  */}
     {/* Mobile Menu Starts  */}
    <nav role="navigation" className="d-block d-lg-none">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="list-unstyled" id="menu">
                <li><a href="index.html"><i className="fa fa-home"></i><span>Home</span></a></li>
                <li><a href="about.html"><i className="fa fa-user"></i><span>About</span></a></li>
                <li><a href="portfolio.html"><i className="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                <li><a href="contact.html"><i className="fa fa-envelope-open"></i><span>Contact</span></a></li>
                <li className="active"><a href="blog.html"><i className="fa fa-comments"></i><span>Blog</span></a></li>
            </ul>
        </div>
    </nav>
     {/* Mobile Menu Ends  */}
</header>


        </>

  )
}

export default Header