// src/app/sections/NilaiDasarSection.tsx
import React from 'react';
import Image from 'next/image';

const NilaiDasarSection = () => {
  const nilaiItems = [
    {
      title: "Obyektif",
      bgColor: "bg-[#007B8E]",
      image: "/assets/icons/Obyektif.png",
    },
    {
      title: "Rasional",
      bgColor: "bg-[#2D9596]",
      image: "/assets/icons/Rasional.png",
    },
    {
      title: "Progres",
      bgColor: "bg-[#628E90]",
      image: "/assets/icons/Progres.png",
    },
    {
      title: "Dinamis",
      bgColor: "bg-[#007B8E]",
      image: "/assets/icons/Dinamis.png",
    },
    {
      title: "Terbuka",
      bgColor: "bg-[#176B87]",
      image: "/assets/icons/Terbuka.png",
    },
  ];

  return (
    <section className="lg:mt-10 mt-5 h-screen px-4 lg:px-24 container mx-auto">
      <div 
        className="w-full mx-auto p-4 lg:p-8 rounded-xl"
        style={{ backgroundImage: 'url("/assets/Value-Bz-04Lai.png")' }}
      >
        <h1
          className=" font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r inline-block from-black to-[#1A5F7A] mb-5 lg:mb-10"
          
        >
          Nilai Dasar Organisasi
        </h1>

        <div className="flex justify-center flex-wrap w-full gap-2 lg:gap-7">
          {nilaiItems.map((item, index) => (
            <div
              key={index}
              className={`w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden ${item.bgColor}`}
            >
              <h3
                className="text-base lg:text-4xl text-white font-helvetica-regular font-bold group-hover:text-[#007B8E] duration-500 z-20 relative ease-in-out"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {item.title}
              </h3>
              
              <div className="w-3/4 ms-auto aspect-square relative z-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover duration-300 ease-in-out"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 px-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NilaiDasarSection;
