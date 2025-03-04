"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function VisiMisi() {
  // Keliling lingkaran (2πr) dengan r=46 => ~289.027
  const circumference = 289.027;

  // 0 => Visi, 1 => Misi
  const [activeSection, setActiveSection] = useState<0 | 1>(0);

  // Refs untuk Intersection Observer
  const visiRef = useRef<HTMLHeadingElement>(null);
  const misiRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Minimal 50% elemen terlihat di viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "visi-heading") {
            setActiveSection(0);
          } else if (entry.target.id === "misi-heading") {
            setActiveSection(1);
          }
        }
      });
    }, options);

    if (visiRef.current) observer.observe(visiRef.current);
    if (misiRef.current) observer.observe(misiRef.current);

    return () => {
      if (visiRef.current) observer.unobserve(visiRef.current);
      if (misiRef.current) observer.unobserve(misiRef.current);
    };
  }, []);

  // Gunakan ref untuk keseluruhan section agar progress scroll relatif terhadap section ini
  const sectionRef = useRef<HTMLElement>(null);
  // Ubah offset menjadi ["start start", "end end"] agar progress mencapai 1 saat section selesai
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Ubah progres scroll menjadi nilai progress (33% → 100%)
  const progressValue = useTransform(scrollYProgress, [0, 1], [33, 100]);
  // Hitung stroke offset dari progres yang dihasilkan
  const strokeOffset = useTransform(progressValue, (p) => circumference - (circumference * p) / 100);

  // Parallax effect untuk elemen secara smooth
  const yCircular = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="lg:flex py-20 gap-10 px-4 lg:px-24  rounded rounded-b-[1000px]">
      {/* Circular Progress dengan parallax */}
      <motion.div
        className="size-8 lg:size-[5%] sticky top-[45vh] flex justify-center  items-center"
        style={{ y: yCircular }}
      >
        {/* Lingkaran tengah (hitam) */}
        <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-4/6 bg-black rounded-full absolute" />
        <svg
          className="CircularProgressbar"
          viewBox="0 0 100 100"
          data-test-id="CircularProgressbar"
        >
          {/* Track lingkaran (abu-abu) */}
          <path
            className="CircularProgressbar-trail"
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            style={{
              strokeDasharray: "289.027px, 289.027px",
              strokeDashoffset: "0px",
            }}
          />
          {/* Progress lingkaran (teal) */}
          <motion.path
            className="CircularProgressbar-path"
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            strokeLinecap="round"
            style={{
              strokeDasharray: "289.027px, 289.027px",
              strokeDashoffset: strokeOffset,
              stroke: "#007B8E",
            }}
          />
        </svg>
      </motion.div>


      {/* Konten VISI & MISI */}
      <div className="flex-1 flex flex-row gap-8">
        {/* Kolom kiri: VISI & MISI */}
        <div className="w-1/3 flex flex-col justify-center">
          {/* VISI */}
          <h2
            id="visi-heading"
            ref={visiRef}
            className={`
              h-[50vh]
              flex items-center
              transition-all duration-600 ease-in-out
              text-4xl lg:text-8xl
              font-face
              font-bold
              text-transparent font-outline-2 bg-clip-text
              ${activeSection === 0 ? "bg-[#007B8E]" : "bg-white"}
            `}
          >
            VISI .
          </h2>

          {/* MISI */}
          <h2
            id="misi-heading"
            ref={misiRef}
            className={`
              h-[50vh]
              flex items-center
              transition-all duration-1000 ease-in-out
              text-4xl lg:text-8xl
              font-bold
              tracking-tighter
              text-transparent font-outline-2 bg-clip-text
              ${activeSection === 1 ? "bg-[#007B8E]" : "bg-white"}
            `}
          >
            MISI .
          </h2>
        </div>

        {/* Kolom kanan: Teks konten */}
        <div className="w-2/3 sticky top-[30vh] h-[50vh] flex items-center">
          <div className="relative w-full">
            {/* Konten VISI */}
            <div
              className={`
                absolute transition-opacity duration-1000 ease-in-out
                ${activeSection === 0 ? "opacity-100" : "opacity-0"}
              `}
            >
              <p className="text-primary-charcoalGray text-lg lg:text-3xl font-helvetica leading-[1.2]">
                Terwujudnya Eksekutif Mahasiswa Brawijaya sebagai{" "}
                <span className="font-bold">Motor Pembaharuan</span> dan{" "}
                <span className="font-bold">Konektor</span> bagi seluruh Simpul
                Brawijaya dengan Bernafaskan Inisiatif, Progresif, dan
                Komunikatif dalam{" "}
                <span className="font-bold">Mengukir Cerita Baik</span> bagi{" "}
                <span className="font-bold">Brawijaya</span> dan Indonesia.
              </p>
            </div>

            {/* Konten MISI */}
            <div
              className={`
                absolute transition-opacity duration-1000 ease-in-out
                ${activeSection === 1 ? "opacity-100" : "opacity-0"}
              `}
            >
              <p className="text-primary-charcoalGray text-lg lg:text-3xl font-helvetica-regular leading-[1.3]">
                Advocacy Student Well-Being Oriented Maximize Collaborative
                Governance Integrity and Empowering Student Movement Spread
                Impactful Energy Self Efficacy and Future Oriented Community
                Development based on Social Needs Information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
