import { Music } from "lucide-react";
import React from "react";
import topeng_ireng from "../assets/topeng_ireng.jpg";
import idakep from "../assets/idakep.jpg";
import warog from "../assets/warog.jpg";
import jaranan from "../assets/jaranan.jpg";

function Kesenian() {
  return (
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
            Melestarikan warisan budaya leluhur melalui berbagai bentuk kesenian
            yang autentik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: "Idakep",
              description:
                "Tari Idakep merupakan tarian yang menggambarkan ungkapan syukur dan kebahagiaan, ditampilkan melalui gerakan lembut, anggun, dan penuh makna.",
              color: "from-yellow-400 to-orange-500",
              img: idakep,
            },
            {
              title: "Jaranan",
              description:
                "Jaranan merupakan seni tari tradisional yang menampilkan gerakan dinamis dan atraktif, sering diiringi musik gamelan dan nuansa magis sebagai bentuk penghormatan terhadap kekuatan spiritual.",
              color: "from-pink-400 to-purple-500",
              img: jaranan,
            },
            {
              title: "Warok",
              description:
                "Warok merupakan tokoh dalam kesenian tradisional yang melambangkan kekuatan, kewibawaan, dan kesaktian, serta menjadi simbol pelindung dalam pertunjukan Reog.",
              color: "from-brown-400 to-yellow-600",
              img: warog,
            },
            {
              title: "Topeng Ireng",
              description:
                "Topeng Ireng adalah seni pertunjukan yang memadukan tari, musik, dan kostum warna-warni dengan gerakan energik, mencerminkan semangat perjuangan dan kehidupan masyarakat pedesaan.",
              color: "from-blue-400 to-indigo-500",
              img: topeng_ireng,
            },
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />

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
                Paguyuban Wahyu Budi Utomo (WBU)
              </h4>
              <p className="text-gray-700 mb-4">
                Paguyuban Wahyu Budi Utomo (WBU) menghadirkan pertunjukan seni
                yang tidak sekadar menghibur, tetapi juga sarat makna spiritual
                dan sakral. Setiap gerakan dan iringan gamelan langsung menjadi
                bagian dari doa dan laku hidup masyarakat. Musik otentik yang
                dimainkan oleh warga sendiri menghadirkan nuansa hangat dan
                hidup.
              </p>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SLky-agyof0?si=wDnaXwpr1WpnfmV5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kesenian;
