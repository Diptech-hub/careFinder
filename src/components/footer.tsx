function Footer() {
  return (
    <div className="bg-teal-700 bg-inheirt p-6 text-white">
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 my-6 bg-inherit">
        <div className="bg-inherit md:w-1/3">
          <strong className="bg-inherit font-bold text-2xl">CareFinder</strong>
          <p className="bg-inherit mt-2">
            If you're interested in collaborating or have any questions, feel
            free to send us a direct message. We're excited to work with you
          </p>
        </div>
        <div className="bg-inherit mt-4 md:mt-0 md:w-1/3">
          <p className="bg-inherit font-bold mb-2">Menu</p>
          <a href="" className="bg-inherit block mb-1">
            Lorem
          </a>
          <a href="" className="bg-inherit block mb-1">
            Lorem
          </a>
          <a href="" className="bg-inherit block mb-1">
            Lorem
          </a>
        </div>
        <div className="bg-inherit md:w-1/3 mt-4 md:mt-0">
          <p className="bg-inherit font-bold mb-2">Send us your feedback</p>
          <div className="flex bg-inherit">
          <input
            type="email"
            className="block w-full md:w-40 px-4 py-2 rounded-md border border-teal-700 focus:outline-none focus:ring focus:border-teal-800 text-black mr-2"
            placeholder="Enter your email..."
          />
          <button className="bg-teal-800 hover:bg-red-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Subscribe
          </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-inherit text-sm">
        ©{new Date().getFullYear()} Created by{" DipTech..."}
      </div>
    </div>
  );
}

export default Footer;
