import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white py-12 text-center">
            <p>&copy; {new Date().getFullYear()} Western Sales Club. All rights reserved.</p>
        </footer>
    )
}

export default Footer