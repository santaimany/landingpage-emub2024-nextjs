// components/ParallaxGrid.tsx
'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';

export const ParallaxGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-1000px start', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const cards = [
    '/assets/parallax/Card1.png',
    '/assets/parallax/Card2.png',
    '/assets/parallax/Card3.png',
    '/assets/parallax/Card4.png',
    '/assets/parallax/Card5.png',
    '/assets/parallax/Card6.png',
    '/assets/parallax/Card7.png',
    '/assets/parallax/Card8.png',
    '/assets/parallax/Card9.png',
    '/assets/parallax/Card10.png',
    '/assets/parallax/Card11.png',
    '/assets/parallax/Card12.png',
    '/assets/parallax/Card13.png',
    '/assets/parallax/Card14.png',
    '/assets/parallax/Card15.png',
    '/assets/parallax/Card16.png',
    '/assets/parallax/Card17.png',
    '/assets/parallax/Card18.png',
 
  ];

  return (
    <section 
      ref={ref}
      className={cn(
        "w-full relative overflow-hidden flex flex-col justify-center items-center",
        "h-screen lg:h-[calc(100vh+20vh)] bg-gradient-to-t from-[#002328] via-[#007B8E] to-[#002328] gap-5"
      )}
    >

<div className="w-full h-16 absolute -top-16 left-0 z-40">
        <Image
          src="/assets/EllipseAtas.png"
          width={1920}
          height={100}
          alt="Ellipse Atas"
          className="w-full h-auto"
          priority
        />
      </div>
      {/* Header */}
      <motion.h1 
        className="
          font- text-2xl lg:text-7xl text-white 
          text-shadow bg-clip-text font-extrabold  to-white 
          text-balance w-4/5 text-center relative  z-40 
           drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    group-hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.3)]
        "
      >
        6 PROGRAM KERJA <br/> MEGA BESAR EM UB 2024
      </motion.h1>

      {/* Button */}
  
<motion.a 
  href="/proker"
  className="
    text-xl relative group rounded-lg font-medium 
    border-2 border-white z-20 
    hover:text-black duration-300 ease-in-out 
    flex items-center gap-2 active:scale-95 active:duration-200
  "
>
  {/* Tombol "Lihat Selengkapnya" */}
  <button>
        <div className="text-xl relative group rounded-lg font-medium bg-transparent  text-primary-charcoalGray border-2 py-1 px-5 border-white z-20 hover:text-white duration-300 ease-in-out overflow-hidden flex items-center gap-2 active:scale-95 active:duration-1000">
          <h1 className="z-10 relative group-hover:text-black duration-700 ease-in-out text-white">
            Lihat Selengkapnya
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="text-white z-20 group-hover:translate-x-2 group-hover:delay-500 group-hover:text-black duration-300 ease-in-out text-xl iconify iconify--maki"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
            />
          </svg>
          <div className="absolute -translate-y-1/2 top-1/2 -left-5 duration-1000 skew-x-12 w-0 group-hover:w-[calc(100%+50px)] bg-white h-[calc(100%+20px)] bottom-0 z-0"></div>
        </div>
      </button>

  {/* Animasi Loading Bar */}
  <div className="
    absolute inset-0 
    before:absolute before:left-0 before:top-0 
    before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out
    group-hover:after:w-full
  "/>

  {/* Overlay untuk efek kontras */}
  <div className="
    absolute inset-0 bg-primary-tealBlue 
    opacity-0 group-hover:opacity-30
    transition-opacity duration-300
  "/>
</motion.a>
      {/* Floating Cards Grid */}
      <div className="w-full flex justify-evenly lg:justify-center items-center lg:gap-12 absolute">
        {/* Column 1 */}
        <motion.div 
          style={{ y: y1 }}
          className="hidden lg:flex flex-col gap-5 lg:w-[16%] w-[25%] relative bottom-12"
        >
          {cards.slice(0, 5).map((src, i) => (
            <Image
              key={`col1-${i}`}
              src={src}
              width={400}
              height={600}
              alt="card"
              className="aspect-[9/14] w-full object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div 
          style={{ y: y2 }}
          className="hidden lg:flex flex-col gap-5 lg:w-[16%] w-[25%] relative top-10"
        >
          {cards.slice(3, 7).map((src, i) => (
            <Image
              key={`col2-${i}`}
              src={src}
              width={400}
              height={600}
              alt="card"
              className="aspect-[9/14] w-full object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div 
          style={{ y: y3 }}
          className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative -bottom-8"
        >
          {cards.slice(7, 11).map((src, i) => (
            <Image
              key={`col3-${i}`}
              src={src}
              width={400}
              height={600}
              alt="card"
              className="aspect-[9/14] w-full object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Column 4 */}
        <motion.div 
          style={{ y: y4 }}
          className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative top-6"
        >
          {cards.slice(10, 14).map((src, i) => (
            <Image
              key={`col4-${i}`}
              src={src}
              width={400}
              height={600}
              alt="card"
              className="aspect-[9/14] w-full object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Column 5 */}
        <motion.div 
          style={{ y: y5 }}
          className="flex flex-col gap-5 lg:w-[16%] w-[25%] relative -bottom-12"
        >
          {cards.slice(11, 17).map((src, i) => (
            <Image
              key={`col5-${i}`}
              src={src}
              width={400}
              height={600}
              alt="card"
              className="aspect-[9/14] w-full object-cover rounded-xl shadow-2xl"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>

      {/* Top/Bottom Curves */}
      <div className="w-full absolute -bottom-14 left-0 z-40">
        <Image
          src="/assets/EllipseBawah.png"
          width={1920}
          height={100}
          alt="Ellipse Bawah"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};