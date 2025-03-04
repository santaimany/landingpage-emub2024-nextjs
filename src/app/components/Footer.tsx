import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 bg-gradient-to-tr from-[#007B8E] to-[#002328] text-white pb-10">
      <div className="container mx-auto px-4 lg:px-28">
        {/* Bagian Utama */}
        <section className="flex lg:flex-row flex-col items-start justify-between gap-8">
          {/* Logo Section */}
          <div className="flex gap-0 lg:gap-10 flex-col items-center lg:items-center">
            {/* Ganti /assets/footer.png dengan logo footer Anda */}
            <img
              src="/assets/footer.png"
              className="lg:h-28 h-16"
              alt="Logo EM UB"
            />
          </div>

          {/* Tautan Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg lg:text-xl font-bold mb-3">Tautan</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm lg:text-base font-light">Beranda</a>
              <a href="#" className="text-sm lg:text-base font-light">Berita</a>
              <a href="#" className="text-sm lg:text-base font-light">Tautan</a>
              <a href="#" className="text-sm lg:text-base font-light">Struktur EM</a>
            </div>
          </div>

          {/* Sosial Media Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg lg:text-xl font-bold mb-3">Sosial Media</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm lg:text-base font-light">LinkedIn</a>
              <a href="#" className="text-sm lg:text-base font-light">Instagram</a>
              <a href="#" className="text-sm lg:text-base font-light">YouTube</a>
              <a href="#" className="text-sm lg:text-base font-light">Tiktok</a>
              <a href="#" className="text-sm lg:text-base font-light">X</a>
            </div>
          </div>

          {/* Alamat & Kontak Section */}
          <div className="flex flex-col items-start lg:w-2/5">
            <h3 className="text-lg lg:text-xl font-bold mb-3">Alamat</h3>
            <p className="text-sm lg:text-base font-light mb-4">
              Gedung EM-DPM UB Lantai I Universitas Brawijaya Malang, <br />
              Jalan Veteran 06C Malang, 65145
            </p>
            
            <h3 className="text-lg lg:text-xl font-bold mt-4">Kontak Kami</h3>
            <p className="text-sm lg:text-base font-light">Telp: +62 858-1570-4443</p>
            <p className="text-sm lg:text-base font-light">E-mail: em@ub.ac.id</p>
          </div>
        </section>

        {/* Ikon Sosial Media */}
        <section className="my-8">
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            {/* Ganti path ikon di bawah ini dengan ikon yang sesuai di folder /assets/ */}
            <a href="#">
              <img
                src="/assets/icons/linkedin_dark.png"
                className="w-12 h-12"
                alt="LinkedIn"
              />
            </a>
            <a href="#">
              <img
                src="/assets/icons/instagram_dark.png"
                className="w-12 h-12"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="/assets/icons/youtube_dark.png"
                className="w-12 h-12"
                alt="YouTube"
              />
            </a>
            <a href="#">
              <img
                src="/assets/icons/tiktok_dark.png"
                className="w-12 h-12"
                alt="Tiktok"
              />
            </a>
            <a href="#">
              <img
                src="/assets/icons/twitter_dark.png"
                className="w-12 h-12"
                alt="X"
              />
            </a>
          </div>
        </section>

        {/* Copyright */}
        <section className="text-center lg:text-start text-sm lg:text-base pt-4 border-white">
          ©️ 2024 EKSEKUTIF MAHASISWA UNIVERSITAS BRAWIJAYA | Made with ♡ by KOMINFO EM UB 2024
        </section>
      </div>
    </div>
  );
};

export default Footer;
