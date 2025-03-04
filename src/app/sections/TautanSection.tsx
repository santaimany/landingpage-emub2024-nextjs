"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const links = [
  {
    title: "Pedoman Kaderisasi Ormawa Universitas Brawijaya",
    url: "https://drive.google.com/file/d/1whzemGxt4cDT2bDRKk7DMYldaSXIhUKW/view",
    bgColor: "bg-[#c2dee7] hover:bg-[#52a2ba]  duration-1000 ease-in-out",
  },
  {
    title: "JDIH EM UB",
    url: "https://linktr.ee/JDIHEMUB",
    bgColor: "bg-[#007B8E59] hover:bg-[#418da4]  duration-1000 ease-in-out",
  },
  {
    title: "Advokesma (Line OA)",
    url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=325twtyk",
    bgColor: "bg-[#c2dee7] hover:bg-[#1985a5]  duration-1000 ease-in-out",
  },
  {
    title: "FORM PARTNERSHIP",
    url: "https://bit.ly/FormPartnershipEMUB24",
    bgColor: "bg-[#007B8E59] hover:bg-[#2b5d6c]  duration-1000 ease-in-out",
  },
  {
    title: "BUKU SAKU P3",
    url: "https://bit.ly/BUKUSAKUP32024",
    bgColor: "bg-[#c2dee7] hover:bg-[#52a2ba]  duration-1000 ease-in-out",
  },
  {
    title: "Buku Panduan Turun ke Jalan",
    url: "https://drive.google.com/file/d/1_RuWuHspQlXXy6cgrhypDlCP7maACRrr/view?usp=sharing",
    bgColor: "bg-[#007B8E59] hover:bg-[#2b5d6c]  duration-1000 ease-in-out",
  },
  {
    title:
      "Brawijaya Connect: Database Unit Kegiatan Mahasiswa (UKM) dan Forum Daerah (FORDA)",
    url: "https://drive.google.com/file/d/1xR_WiVFtq2yjb7Wan3t6h8-3t4h2iVfG/view?usp=sharing",
    bgColor: "bg-[#628E90] hover:bg-[#1a3942]  duration-1000 ease-in-out",
  },
];

export const TautanSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <div className="flex w-full gap-5 items-end justify-start mb-5 lg:mb-10">
          <div className="w-full h-0.5 lg:h-1 bg-gradient-to-r from-[#007B8E]  to-[#ECD7CD]"></div>
          <h1 className="text-black text-2xl lg:text-5xl font-bold  font-helvetica-bold w-fit whitespace-nowrap">
            Tautan Pintas
          </h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // Auto slide tiap 3 detik
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          {links.map((link, index) => (
            <SwiperSlide key={index}>
              <motion.div
             
                className="h-full flex justify-center"
              >
                <a
                  href={link.url}
                  className="block h-full w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Card */}
                  <div
                    className={`${link.bgColor} bg-opacity-80 group-hover:bg-opacity-100 relative group p-3 lg:p-7 flex items-end shadow-md mx-auto rounded-xl overflow-hidden aspect-[4/3] duration-300 ease-in-out`}
                  >

                    <img src="/assets/icons/tautanarrow.png" className="absolute top-3 lg:top-7 group-hover:top-2 lg:group-hover:top-6 right-3 lg:right-7 lg:group-hover:right-6 group-hover:right-2 z-30 duration-500 ease-in-out text-base lg:text-2xl " />

                    {/* Background Effects */}
                    <div className="absolute w-2/5 h-2/5 -top-2/4 lg:group-hover:-top-1 group-hover:-top-0 group-hover:-right-0 lg:group-hover:-right-1 duration-700 ease-in-out group-hover:delay-300 -right-2/4 rounded-bl-xl bg-transparent z-10">
                      <div className="absolute bg-white size-3/4 rounded-bl-3xl right-0 top-0" />
                    </div>

                    {/* Judul Link */}
                    <h1 className="relative text-base lg:text-3xl text-black group-hover:text-white font-semibold z-10 duration-300">
                      {link.title}
                    </h1>
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
