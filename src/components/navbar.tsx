import React, { useState } from "react";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

// Fix for path issues - use a hardcoded slash if BASE_URL is empty
const baseUrl = import.meta.env.BASE_URL || "/";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-xl leading-6 font-jost text-primary-200";

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
      <a href={baseUrl}>
        {" "}
        <Logo />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row gap-6">
          <a href={baseUrl} className={linkStyle}>
            Home
          </a>
          <a href={baseUrl + "about"} className={linkStyle}>
            About Us
          </a>
          <a href={baseUrl + "services"} className={linkStyle}>
            Services
          </a>
          <a href={baseUrl + "testimonials"} className={linkStyle}>
            Testimonials
          </a>
          <a href={baseUrl + "contact"} className={linkStyle}>
            Contact Us
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          <a href={baseUrl} className={linkStyle}>
            Home
          </a>
          <a href={baseUrl + "about"} className={linkStyle}>
            About Us
          </a>
          <a href={baseUrl + "services"} className={linkStyle}>
            Services
          </a>
          <a href={baseUrl + "testimonials"} className={linkStyle}>
            Testimonials
          </a>
          <a href={baseUrl + "contact"} className={linkStyle}>
            Contact Us
          </a>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
