import React from "react";


function Footer() {
    return (
        <footer className="bg-grey w-screen text-white px-12 py-12 flex justify-between items-center">
            <div>
                <img src='/tsi-logo.png' className="w-12 h-12"></img>
            </div>
            <div>
                <p className="text-m">&copy; {new Date().getFullYear()} Western Sales Club. All rights reserved.</p>
                <div className="flex justify-between py-2 px-14">
                    <a href="https://www.cesoid.com/2048?theme=bkVkd1NxQyU6kED" className="underline text-sm">Terms of Service</a>
                    <a href="https://www.cesoid.com/2048?theme=AFmtBE9JNezgFMt" className="underline text-sm">Privacy Policy</a>
                </div>
            </div>
            <div className="flex gap-4">
                <a href=""><img src='/instagram-brands.svg' className="w-6 h-6"></img></a>
                <a href=""><img src='/linkedin-brands.svg' className="w-6 h-6"></img></a>
            </div>
        </footer>
    )
}

export default Footer;