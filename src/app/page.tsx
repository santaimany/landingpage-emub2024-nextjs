// src/app/page.tsx (atau Home.tsx)

import HeroCarousel from './components/HeroCarousel';
import VisiMisiSection from './sections/VisiMisiSection';
import { ParallaxGrid } from './components/ui/ParallaxGrid';
import NilaiDasarSection from './sections/NilaiDasarSection';
import { NewsSection } from './sections/NewsSectrion';
import { CompanyProfileSection } from './sections/CompanyProfileSection';
import { TautanSection } from './sections/TautanSection';


export default function Home() {
  return (
    <main className=''>
      <HeroCarousel />

      {/* Section baru dengan gambar kabinet.png */}
      <section className="relative">
  <div className="w-full h-[20vh] md:h-[80vh] overflow-hidden ">
    <img
      src="/assets/kabinet.png"
      className="w-full h-full object-cover"
      alt="Kabinet"
    />
  </div>
</section>



      <VisiMisiSection />

      <ParallaxGrid 
         
      
      />


      <NilaiDasarSection />

<div className="relative">

      <NewsSection />

      <CompanyProfileSection  />
      <TautanSection />
</div>

    </main>
  );
}
