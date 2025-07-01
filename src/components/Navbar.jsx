import React, { useState, useEffect } from "react";
import ToggleButton from "./Sidebar/ToggleButton";
import { motion } from "framer-motion";
import Links from "./Sidebar/Links";
import { TreePine } from "lucide-react";

const variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      type: "linear",
      stiffness: 100,
    },
  },
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      type: "linear",
      stiffness: 1000,
    },
  },
};

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition < 700); // ubah angka sesuai tinggi hero
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Use setTimeout to delay the appearance of the animation
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay (in milliseconds) as needed

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const [Open, setOpen] = React.useState(false);
  console.log(Open);

  function togglebut() {
    setOpen(false);
  }

  return (
    <div className=" flex py-6 px-6 items-center justify-center xs:justify-between  ">
      <motion.h1
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="font-bold font-poppins text-[19px] cursor-pointer z-[999]"
        onClick={togglebut}
      >
        <div className="flex items-center space-x-2">
          <TreePine className="h-8 w-8 text-green-600" />
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              isTop ? "text-white" : "text-gray-800"
            }`}
            onClick={() => scrollToSection("home")}
          >
            Dusun Macanan
          </span>
        </div>
      </motion.h1>
      <motion.div
        animate={Open ? "open" : "closed"}
        className="text-gray-500 px-20 mb-[15px] "
      >
        <motion.div
          variants={variants}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          className="top-0 bottom-0 right-0 w-full bg-gray-300 fixed"
        >
          <Links Open={setOpen} />
        </motion.div>
      </motion.div>

      <motion.div
        className="cursor-pointer z-[999]"
        animate={Open ? "open" : "closed"}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <ToggleButton Open={setOpen} />
      </motion.div>
    </div>
  );
}
