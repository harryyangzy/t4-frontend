import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Nav />
            <div>
                <h1 className="">About Us</h1>
            </div>
            <div className = "justify-center w-[800px]">
            <hr className="border-t-2 border-gold my-10" />
                <h3 class = "aboutTitle">Mission</h3>
                <p>Our mission is to promote the sport of weightlifting in the Washington State area.</p>
            </div>
            <Footer />
        </>
    )
}

export default About;