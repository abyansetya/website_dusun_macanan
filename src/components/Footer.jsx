import { TreePine } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="https://wisatatajuk.com/favicon-32x32.png" alt="" />
            <span className="text-2xl font-bold">Dusun Macanan</span>
          </div>
          <p className="text-gray-400 mb-6">
            Melestarikan tradisi, mengembangkan pertanian, membangun masa depan
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Dusun Macanan. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
