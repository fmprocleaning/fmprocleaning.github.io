import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";
import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

// Fix for path issues - ensure baseUrl always ends with a slash
const baseUrl = import.meta.env.BASE_URL || '/';

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href={baseUrl} className="">
            <Logo />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Professional cleaning and maintenance services for commercial spaces, hospitality properties, and end of tenancy requirements.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href={baseUrl}>
              <Facebook />
            </a>
            <a href={baseUrl}>
              <Twitter />
            </a>
            <a href={baseUrl}>
              <LinkedIn />
            </a>
            <a href={baseUrl}>
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href={baseUrl + "about"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              About Us
            </a>
            <a
              href={baseUrl + "services"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Services
            </a>
            <a
              href={baseUrl + "contact"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Services
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href={baseUrl + "services"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Commercial Cleaning
            </a>
            <a
              href={baseUrl + "services"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Hotel & AirBnB Cleaning
            </a>
            <a
              href={baseUrl + "services"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              End of Tenancy
            </a>
            <a
              href={baseUrl + "services"}
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Property Maintenance
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              40 Bow Road, London, England, E3 4LN
            </p>
            <a 
              href="mailto:info@fmprocleaning.com" 
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray hover:text-primary-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2"
            >
              info@fmprocleaning.com
            </a>
            <a 
              href="tel:+447366193973" 
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray hover:text-primary-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2"
            >
              +44 7366 193973
            </a>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
