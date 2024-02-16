function Footer() {
    return(
        <div className="bg-teal-500 bg-inheirt p-6">
            <div className="flex flex-row justify-between mx-10 my-10 bg-inherit">
            <div className="bg-inherit w-96">
                <strong className="bg-inherit">CareFinder</strong>
                <p className="bg-inherit">If you're interested in collaborating or have any questions, feel free to send us a direct message. We're excited to work with you</p>
                {/* ©{new Date().getFullYear()} Created by{" DipTech"} */}
            </div>
            <div className="bg-inherit flex flex-col">
                <p className="bg-inherit">Menu</p>
                <a href="" className="bg-inherit">Lorem</a>
                <a href="" className="bg-inherit">Lorem</a>
                <a href="" className="bg-inherit">Lorem</a>
            </div>
            <div className="bg-inherit"> 
                <p className="bg-inherit">Send us your feedback</p>
                <input type="email" placeholder="Enter Your Email"/><br />
                <button>Subscribe</button>
            </div>
        </div>
        </div>
    );
}

export default Footer;