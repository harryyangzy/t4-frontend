import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Landing() {
    return (
        <>
            <Nav />
            <div className="flex flex-col items-center justify-center h-96">
                <h3 className="text-2xl">Welcome to</h3>
                <h1 className="text-5xl font-bold">Western's Sales Community</h1>
            </div>
            <Footer />
        </>
    )
}

export default Landing