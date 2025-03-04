import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-black">
      {/* Background bintang */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/404NotFound.png")', 
          // Ganti "/assets/404NotFound.png" dengan path background bintang Anda
        }}
      />

      {/* Gradasi di bagian bawah (dari teal ke transparan) */}
      <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#002328] to-transparent" />

      {/* Konten utama (agar berada di atas background & gradasi) */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Angka 404 besar */}
        <div className="text-white font-extrabold flex items-center text-[10rem] md:text-[12rem] leading-none">
          <span>4</span>
          {/* “0” diganti gambar bulan/planet */}
          <div className="relative w-[160px] h-[160px] md:w-[300px] md:h-[300px] mx-2 flex items-center justify-center">
            <img
              src="/assets/moon.png"
              alt="moon"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Angka '0' tetap ada tapi disembunyikan agar planet pas di tengah */}
            <span className="invisible">0</span>
          </div>
          <span>4</span>
        </div>

        {/* Teks "PAGE NOT FOUND" */}
        <p className="mt-4 text-base md:text-lg tracking-widest uppercase">
          PAGE NOT FOUND
        </p>

        {/* Tautan "Home →" */}
        <Link
          href="/"
          className="mt-4 text-sm md:text-base uppercase underline hover:text-gray-300 transition-colors"
        >
          Home &rarr;
        </Link>
      </div>
    </main>
  );
}
