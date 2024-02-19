function Footer() {
  return (
    <div className="bg-teal-700 bg-inheirt p-6 text-white">
      <div className="flex flex-row justify-between mx-10 my-10 bg-inherit">
        <div className="bg-inherit w-96">
          <strong className="bg-inherit font-bold text-2xl">CareFinder</strong>
          <p className="bg-inherit mt-2">
            If you're interested in collaborating or have any questions, feel
            free to send us a direct message. We're excited to work with you
          </p>
        </div>
        <div className="bg-inherit flex flex-col">
          <p className="bg-inherit font-bold my-2">Menu</p>
          <a href="" className="bg-inherit">
            Lorem
          </a>
          <a href="" className="bg-inherit">
            Lorem
          </a>
          <a href="" className="bg-inherit">
            Lorem
          </a>
        </div>
        <div className="bg-inherit">
          <p className="bg-inherit font-bold my-2">Send us your feedback</p>
          <input
            type="email"
            className="block w-full px-4 py-2 rounded-md border border-teal-700 focus:outline-none focus:ring focus:border-teal-800 text-black"
            placeholder="Enter your email..."
          />
          <button className="bg-teal-800 hover:bg-red-800 text-white py-2 my-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center bg-inherit text-sm">
        ©{new Date().getFullYear()} Created by{" DipTech..."}
      </div>
    </div>
  );
}

export default Footer;
