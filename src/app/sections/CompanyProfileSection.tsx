'use client';

export const CompanyProfileSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/BackGroundLogoKiri-DNh_6c5r.png" 
          alt="" 
          className="absolute -mt-[15vh] md:-mt-[28vh] lg:-mt-[56vh] xl:-mt-[40vh] left-0 h-[70vw] md:h-[84vw]"
        />
        
        <img 
          src="/assets/BackGroundLogoKanan-CVz3fIjD.png" 
          alt="" 
          className="absolute mt-6 md:mt-12 lg:mt-14 xl:mt-16 right-0 h-[75vw] md:h-[85vw]"
        />
        
        <img 
          src="/assets/ComProfRight-mwtGkGfD.png" 
          alt="" 
          className="absolute -mt-[12vw] md:-mt-[9vw] right-0 h-[35vw] md:h-[40vw]"
        />
        
        <img 
          src="/assets/ComprofLeft-BsWP8r6q.png" 
          alt="" 
          className="absolute mt-[45vw] md:mt-[36vw] lg:mt-[32vw] xl:mt-[35vw] left-6 md:left-20 lg:left-32 xl:left-40 h-[30vw] md:h-[28vw]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 md:pt-32 pb-40 md:pb-64">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            <img 
              src="/assets/Comprof.png" 
              alt="Company Profile" 
              className="h-16 md:h-20 lg:h-24 xl:h-28"
            />
            
            <h3 className="font-helvetica-regular mt-4 md:mt-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black text-center">
              Kabinet <span className="font-bold text-[#007B8E]">Cerita Kita</span>
            </h3>
            
            <div className="w-full max-w-[90vw] md:w-[64vw] mt-8 md:mt-8 lg:mt-12">
              <iframe 
                src="https://www.youtube.com/embed/SMMCzNkIDVE" 
                className="w-full aspect-video rounded-[2rem] md:rounded-3xl shadow-xl"
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};