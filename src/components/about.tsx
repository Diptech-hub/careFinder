import med1 from "../assets/med1.svg";

function About() {
  return (
    <div className="my-10 sm:my-20 px-6 sm:px-10 flex flex-col sm:flex-row">
      <div className="sm:w-1/2">
        <strong className="text-2xl text-teal-500 text-center">About CareFinder</strong>
        <p className="text-sm mt-6 font-normal leading-6">
          At CareFinder, we understand the importance of accessible and quality
          healthcare, which is why we've dedicated ourselves to simplifying the
          process of finding hospitals and medical facilities in your area. With
          our intuitive platform, you can easily search for hospitals, clinics,
          and medical specialists near you. <br />
          We provide comprehensive details about each facility, including
          contact information, services offered, and patient reviews, to help
          you make the best choice for your healthcare needs. <br />
          At CareFinder, we believe that everyone deserves access to quality
          healthcare, and we're committed to making that a reality. Join us on
          our mission to create a healthier and happier Nigeria, one search at a
          time.
        </p>
      </div>
      <div className="sm:ml-10 mt-6 sm:mt-0 flex justify-center">
        <img
          src={med1}
          height={400}
          width={400}
          alt="Medicine"
          // className="w-64 h-auto"
        />
      </div>
    </div>
  );
}

export default About;
