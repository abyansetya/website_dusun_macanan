import { ChevronDown } from "lucide-react";
import React from "react";
import Pemandangan from "./../assets/a.jpg";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${Pemandangan})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-100 mb-6">
            <span className=" text-white">Dusun Macanan</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sebuah dusun yang kaya akan kesenian tradisional, pertanian
            berkelanjutan, dan keindahan alam yang memukau di tengah kehijauan
            Indonesia
          </p>

          <button
            onClick={() => scrollToSection("Lokasi")}
            className="inline-flex justify-center items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Jelajahi Dusun</span>
            <ChevronDown className="h-5 w-5 translate-y-[1px]" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
