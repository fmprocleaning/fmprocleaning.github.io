import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <a href="mailto:info@fmprocleaning.com" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight hover:text-primary-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2">
        <Mail className="transition-transform duration-300 group-hover:scale-110" /> info@fmprocleaning.com
      </a>
      <a href="tel:+447366193973" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight hover:text-primary-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2">
        <Phone className="transition-transform duration-300 group-hover:scale-110" /> +44 7366 193973
      </a>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        <Web /> www.fmprocleaning.com
      </h5>
    </div>
  );
};

export default ContactInfo;
