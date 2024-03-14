import IconText from "./card";
import { LiaRibbonSolid } from "react-icons/lia";
import { BsHeartPulse } from "react-icons/bs";
import { GrGrow } from "react-icons/gr";
import { PiBrain } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { SiMoleculer } from "react-icons/si";
import { GiMedicines } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";

function Service() {
  return (
    <div className="my-10 sm:my-20 px-6 sm:px-10">
      <strong className="text-2xl text-teal-500">Our Services</strong>
      <div className="flex flex-col ">
        <div>
          <p className="text-sm mt-6 font-normal leading-6">
            At CareFinder, we are dedicated to providing comprehensive
            healthcare solutions tailored to meet your needs. Our goal is to
            empower you with the tools and resources you need to make informed
            decisions about your health and well-being. Trust CareFinder for
            reliable and convenient healthcare services.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mt-6 sm:mt-0">
            <IconText text="Oncology" icon={LiaRibbonSolid} />
            <IconText text="Cardiology" icon={BsHeartPulse} />
            <IconText text="Fertility" icon={GrGrow} />
            <IconText text="Mental Health" icon={PiBrain} />
            <IconText text="Neurology" icon={GiBrain} />
            <IconText text="Rare Diseases" icon={SiMoleculer} />
            <IconText text="Pharmacist" icon={GiMedicines} />
            <IconText text="Health Plan" icon={FaClinicMedical} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
