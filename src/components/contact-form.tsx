import React from "react";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      {/* Direct mailto form - simplest approach */}
      <form 
        action="mailto:info@fmprocleaning.com" 
        method="post" 
        encType="text/plain"
        className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]"
      >
        <div className="col-span-1">
          <label htmlFor="name" className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
              placeholder="Name *"
            />
          </label>
        </div>
        
        <div className="col-span-1">
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
              placeholder="Email *"
            />
          </label>
        </div>
        
        <div className="col-span-1">
          <label htmlFor="subject" className="w-full">
            <input
              type="text"
              id="subject"
              name="subject"
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
              placeholder="Subject"
            />
          </label>
        </div>
        
        <div className="col-span-1">
          <label htmlFor="phone" className="w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
              placeholder="Phone"
            />
          </label>
        </div>
        
        <div className="col-span-2">
          <label htmlFor="message" className="w-full">
            <textarea
              id="message"
              name="message"
              required
              className="border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
              cols={30}
              rows={10}
              placeholder="Hello, I am interested in... *"
            ></textarea>
          </label>
        </div>

        <div className="w-full flex justify-end col-span-2">
          <button 
            type="submit"
            className="rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-primary-200 hover:bg-primary-100"
          >
            Submit Inquiry
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
            </svg>
          </button>
        </div>
      </form>
      <div className="mt-6 text-sm text-text-gray text-center">
        <p>Submitting will open your email client with pre-filled information. <br />Fields marked with * are required.</p>
      </div>
    </div>
  );
};

export default ContactForm;
