import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Events() {
    return (
        <>
            <Nav />
            <div>
                <h1 className="">Events</h1>
            </div>
            <hr clasNames="border-t-2 border-gray-300 my-4" />
            <div>
                <p>yap yap yap</p>
            </div>
            <div className="grid grid-cols-1">
                <hr clasNames="border-t-2 border-gray-300 my-4" />
                <article>
                    <h2>Article Title</h2>
                    <p>Article content...</p>
                </article>
                <hr clasNames="border-t-2 border-gray-300 my-4" />
            </div>

            <Footer />
        </>
    )
}

export default Events;