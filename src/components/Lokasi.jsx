import { MapPin } from "lucide-react";
import React from "react";

function Lokasi() {
  return (
    <>
      {/* Lokasi Section */}
      <section id="Lokasi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lokasi Geografis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dusun Macanan menawarkan suasana pedesaan yang tenang dengan
              pemandangan alam yang menakjubkan serta kekayaan budaya yang masih
              terjaga.
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

            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7913.096515551111!2d110.45465183828883!3d-7.404404404646607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7bb7044bad07%3A0x57000ba0f07408d2!2sMacanan%2C%20Tajuk%2C%20Getasan%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1751165399164!5m2!1sen!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lokasi;
