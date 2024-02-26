import Header from "./header"
import About from "./about"
import Service from "./service"
import Footer from "./footer"
import HospitalList from "./addHospital"

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <HospitalList />
      <Footer />
    </div>
  );
}

export default Home;
