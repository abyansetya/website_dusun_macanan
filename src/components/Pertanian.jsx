import { Leaf, Users, Wheat } from "lucide-react";
import React from "react";

function Pertanian() {
  return (
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
              title: "Tanaman Cabai",
              description:
                "Cabai menjadi tanaman utama yang ditanam oleh masyarakat dusun Macanan",
              icon: "🌶️",
            },
            {
              title: "Teh Sangan",
              description:
                "Teh Sangan adalah teh khas Dusun Macanan yang memiliki cita rasa pahit unik hasil dari proses sangrai tradisional.",
              icon: "🍵",
            },
            {
              title: "Ternak Sapi Perah",
              description:
                "Ternak Sapi Perah di Dusun Macanan merupakan usaha peternakan lokal yang menghasilkan susu segar berkualitas tinggi melalui perawatan sapi yang alami dan terjaga.",
              icon: "🐄",
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
  );
}

export default Pertanian;
