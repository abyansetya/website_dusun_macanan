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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

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
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div
          className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-200 via-blue-200 to-green-300 flex items-center justify-center">
                <div className="text-center">
                  <TreePine className="h-20 w-20 text-green-700 mx-auto mb-4" />
                  <div className="text-green-800 font-semibold">
                    Pemandangan Asri
                  </div>
                  <div className="text-green-600 text-sm">Dusun Macanan</div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Dusun Macanan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sebuah dusun yang kaya akan kesenian tradisional, pertanian
            berkelanjutan, dan keindahan alam yang memukau di tengah kehijauan
            Indonesia
          </p>

          <button
            onClick={() => scrollToSection("Lokasi")}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Jelajahi Dusun</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Lokasi Section */}
      <section id="Lokasi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lokasi Geografis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Terletak di wilayah yang strategis dengan akses mudah dan
              pemandangan yang menakjubkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Informasi Lokasi
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Provinsi: Jawa Tengah</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Kabupaten: Semarang</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Ketinggian: 500-800 mdpl
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Luas Wilayah: ±2.5 km²
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Karakteristik Geografis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dusun Macanan terletak di daerah perbukitan dengan topografi
                  yang bergelombang. Wilayah ini dikelilingi oleh hutan bambu
                  dan perkebunan yang hijau, menciptakan ekosistem yang seimbang
                  dan udara yang sejuk sepanjang tahun.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-200 via-blue-200 to-green-300 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-24 w-24 text-green-700 mx-auto mb-4" />
                  <div className="text-green-800 font-semibold text-lg">
                    Peta Lokasi
                  </div>
                  <div className="text-green-600">Dusun Macanan</div>
                  <div className="text-green-500 text-sm mt-2">
                    Koordinat: -7.2°S, 110.4°E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pertanian Section */}
      <section
        id="Pertanian"
        className="py-20 bg-gradient-to-br from-green-50 to-yellow-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Wheat className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pertanian Berkelanjutan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Menerapkan sistem pertanian ramah lingkungan dengan hasil yang
              berkelanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Padi Organik",
                description:
                  "Budidaya padi dengan metode organik tanpa pestisida kimia",
                icon: "🌾",
              },
              {
                title: "Sayuran Hidroponik",
                description:
                  "Sistem tanam modern untuk menghasilkan sayuran berkualitas",
                icon: "🥬",
              },
              {
                title: "Ternak Ayam Kampung",
                description: "Peternakan ayam kampung dengan pakan alami",
                icon: "🐓",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Filosofi Pertanian Kami
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dusun Macanan menerapkan prinsip pertanian berkelanjutan yang
                  menghormati alam. Kami menggunakan teknik tradisional yang
                  dipadukan dengan inovasi modern untuk menghasilkan produk
                  pertanian yang sehat dan ramah lingkungan.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Leaf className="h-4 w-4 text-green-500" />
                    <span>100% Organik</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>Ekonomi Rakyat</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-yellow-200 via-green-200 to-yellow-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Wheat className="h-16 w-16 text-green-700 mx-auto mb-2" />
                    <div className="text-green-800 font-semibold">
                      Hasil Pertanian
                    </div>
                    <div className="text-green-600 text-sm">
                      Berkualitas Tinggi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
