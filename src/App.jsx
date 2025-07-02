import React, { useState, useEffect } from "react";
import {
  MapPin,
  Wheat,
  Music,
  Home,
  ChevronDown,
  Users,
  Leaf,
  TreePine,
} from "lucide-react";
import styles from "./style";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Lokasi from "./components/Lokasi";
import Pertanian from "./components/Pertanian";
import Kesenian from "./components/Kesenian";
import Footer from "./components/Footer";

export default function DusunMacananProfile() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navbar */}
      {/* <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">
                Dusun Macanan
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "lokasi", label: "Lokasi", icon: MapPin },
                { id: "pertanian", label: "Pertanian", icon: Wheat },
                { id: "kesenian", label: "Kesenian", icon: Music },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-green-600 bg-green-100"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav> */}
      <div className="w-full">
        <div className="z-[9999] fixed w-full">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <Hero />
      {/* Lokasi Section */}
      <Lokasi />
      {/* Pertanian Section */}
      <Pertanian />
      {/* Kesenian Section */}
      <Kesenian />
      {/* Footer */}
      <Footer />
    </div>
  );
}
