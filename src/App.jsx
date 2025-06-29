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
      <section
        id="Kesenian"
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Music className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kesenian Tradisional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Melestarikan warisan budaya leluhur melalui berbagai bentuk
              kesenian yang autentik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Gamelan Jawa",
                description:
                  "Pertunjukan musik tradisional dengan alat musik gamelan",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Tari Srimpi",
                description:
                  "Tarian klasik yang menggambarkan keanggunan budaya Jawa",
                color: "from-pink-400 to-purple-500",
              },
              {
                title: "Wayang Kulit",
                description:
                  "Pertunjukan wayang dengan cerita-cerita pewayangan klasik",
                color: "from-brown-400 to-yellow-600",
              },
              {
                title: "Batik Tulis",
                description:
                  "Seni membatik dengan teknik tulis yang diwariskan turun-temurun",
                color: "from-blue-400 to-indigo-500",
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`w-full h-48 bg-gradient-to-br ${item.color} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  <Music className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Pelestarian Budaya
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Sanggar Seni Tradisional
                </h4>
                <p className="text-gray-700 mb-4">
                  Dusun Macanan memiliki sanggar seni yang aktif mengajarkan
                  berbagai kesenian tradisional kepada generasi muda. Setiap
                  minggu diadakan latihan rutin untuk melestarikan warisan
                  budaya leluhur.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Festival Budaya Tahunan
                </h4>
                <p className="text-gray-700 mb-4">
                  Setiap tahun diadakan festival budaya yang menampilkan seluruh
                  kesenian tradisional dusun. Acara ini tidak hanya sebagai
                  hiburan, tetapi juga sebagai sarana edukasi dan pelestarian
                  budaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TreePine className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Dusun Macanan</span>
            </div>
            <p className="text-gray-400 mb-6">
              Melestarikan tradisi, mengembangkan pertanian, membangun masa
              depan
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Dusun Macanan. Semua hak cipta dilindungi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
