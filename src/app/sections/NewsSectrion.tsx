'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

export const NewsSection = () => {
  const newsItems = [
    {
      title: 'WORKSHOP AdvoHealth x Berbinar 2024',
      date: '14 September 2024',
      description:
        'Waktu untuk mengeksplorasi dan mengapresiasi seni telah tiba! Siapa nih yang suka untuk eksplor kreativitasnya?!',
      image: '/assets/news-card1.png',
    },
    {
      title: 'Open Registration BUSINESS MODEL CANVAS...',
      date: '14 September 2024',
      description:
        'Halo, ada kabar gembira nih! Brawijaya Muda 2024 menghadirkan Kompetisi Business Model Canvas...',
      image: '/assets/news-card2.png',
    },
    {
      title: 'LKMM-TL UB 2024',
      date: '14 September 2024',
      description:
        'Ada kabar terbaru nih buat kalian semua calon pemimpin masa depan, kalau kegiatan Latihan Keterampilan Manajemen Mahasiswa Tingkat Lanjut...',
      image: '/assets/news-card1.png',
    },
    {
      title: 'LKMM-TL UB 2024',
      date: '14 September 2024',
      description:
        'Ada kabar terbaru nih buat kalian semua calon pemimpin masa depan, kalau kegiatan Latihan Keterampilan Manajemen Mahasiswa Tingkat Lanjut...',
      image: '/assets/news-card2.png',
    },
    {
      title: 'LKMM-TL UB 2024',
      date: '14 September 2024',
      description:
        'Ada kabar terbaru nih buat kalian semua calon pemimpin masa depan, kalau kegiatan Latihan Keterampilan Manajemen Mahasiswa Tingkat Lanjut...',
      image: '/assets/news-card2.png',
    },
  ];

  return (
    <section className="lg:mt-10 mt-5 py-16 px-4 lg:px-24 container mx-auto">
      {/* Title */}
      <div className="mb-10 flex items-end gap-5">
        <div className="flex flex-col font-helvetica-extraBold w-fit whitespace-nowrap">
          <h2 className="text-3xl lg:text-5xl font-bold text-black">BERITA</h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#007B8E]">
            EM UB 2024
          </h2>
        </div>
        {/* Responsive Line Image */}
        <Image
          src="/assets/line.png"
          width={1920}
          height={100}
          alt="Ellipse Atas"
          className="w-full h-full relative bottom-0"
          priority
        />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1} // Default untuk mobile: 1 slide
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3, // Desktop tetap menampilkan 3 slide
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index} className="h-fit py-10">
            <div className="aspect-[9/13] w-full group hover:shadow-xl duration-300 ease-in-out relative rounded border overflow-hidden flex flex-col">
              {/* Bagian Gambar */}
              <div className="w-full aspect-video overflow-hidden">
                <Image
                  src={news.image}
                  width={400}
                  height={200}
                  alt="News Image"
                  className="w-full aspect-video object-cover group-hover:rotate-1 group-hover:scale-[101%] duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>

              {/* Bagian Konten */}
              <div className="w-full py-1 px-2 flex flex-col flex-1">
                <div className="flex items-start justify-between">
                  <small className="text-xs">{news.date}</small>
                </div>
                <div className="px-3 lg:px-5 flex-1">
                  <h1 className="lg:mt-3 mt-1 text-sm sm:text-lg lg:text-2xl font-bold h-fit lg:h-16 line-clamp-2">
                    {news.title}
                  </h1>
                  <p className="text-xs prose-2xl h-fit mt-1 lg:mt-3 line-clamp-3 lg:line-clamp-4">
                    {news.description}
                  </p>
                </div>

                {/* Tombol Baca Selengkapnya */}
                <div className="mt-auto px-3 lg:px-5 pb-3">
                  <a href="/proker" tabIndex={-1}>
                    <button className="w-full text-xs lg:text-base mx-auto rounded py-1 lg:py-2 cursor-pointer bg-black text-slate-100 active:scale-95 duration-300 ease-in-out">
                      Baca Selengkapnya
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Line Separator */}
      <div className="mt-10 flex items-end gap-5">
        <div className="w-4/6 h-0.5 lg:h-1 bg-gradient-to-r to-[#007B8E] via-[#D6DAF7] from-[#ECD7CD]" />
        {/* Responsive Quote Image */}
        <Image
          src="/assets/kutip.png"
          width={59}
          height={48}
          alt="Kutip"
          className="h-7 sm:h-8 md:h-10 lg:h-12 aspect-auto"
        />
      </div>
    </section>
  );
};
