'use client'; // Menandakan komponen ini sebagai Client Component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Menggunakan usePathname
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();  
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menentukan apakah link saat ini aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="px-3 lg:px-24 py-3 shadow-lg sticky top-0 z-[100] bg-white">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center">
        {/* Logo di pojok kiri */}
        <div className="flex items-center">
          {/* Membungkus Image dalam div dengan lebar responsif */}
          <div className="w-32 lg:w-[170px]">
            <Image 
              src="/assets/navbarlogo.png" 
              alt="EM UB Logo" 
              width={170} 
              height={80} 
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Links di pojok kanan */}
        <div className="hidden lg:flex gap-10 items-center h-full ">
          <Link href="/" className="relative group">
            <span className={`text-xl ${isActive('/') ? '' : ''}`}>
              Beranda
            </span>
            <div className={`transition-all duration-300 ${
              isActive('/') 
                ? 'w-full' 
                : 'group-hover:w-full group-hover:left-0 right-0 origin-right w-0'
            } absolute bottom-0 h-0.5 bg-[#007B8E]`}/>
          </Link>
          
          <Link href="/berita" className="relative group">
            <span className={`text-xl ${isActive('/berita') ? '' : ''}`}>
              Berita
            </span>
            <div className={`transition-all duration-300 ${
              isActive('/berita') 
                ? 'w-full' 
                : 'group-hover:w-full group-hover:left-0 right-0 origin-right w-0'
            } absolute bottom-0 h-0.5 bg-[#007B8E]`}/>
          </Link>

          <Link href="/tentang" className="relative group">
            <span className={`text-xl ${isActive('/tentang') ? '' : ''}`}>
              Tentang
            </span>
            <div className={`transition-all duration-300 ${
              isActive('/tentang') 
                ? 'w-full' 
                : 'group-hover:w-full group-hover:left-0 right-0 origin-right w-0'
            } absolute bottom-0 h-0.5 bg-[#007B8E]`}/>
          </Link>

          <Link href="/struktur-em" className="relative group">
            <span className={`text-xl ${isActive('/struktur-em') ? '' : ''}`}>
              Struktur EM
            </span>
            <div className={`transition-all duration-300 ${
              isActive('/struktur-em') 
                ? 'w-full' 
                : 'group-hover:w-full group-hover:left-0 right-0 origin-right w-0'
            } absolute bottom-0 h-0.5 bg-[#007B8E]`}/>
          </Link>
        </div>

        {/* Hamburger menu untuk tampilan mobile */}
        <div 
          className="lg:hidden flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-0.5 bg-[#007B8E] rounded-lg transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}/>
          <div className={`w-6 h-0.5 bg-[#007B8E] rounded-lg my-1 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}/>
          <div className={`w-6 h-0.5 bg-[#007B8E] rounded-lg transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}/>
        </div>
          
        {/* Mobile Menu Panel */}
        <div className={`fixed top-14 right-0 w-full h-fit bg-white z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col text-base p-4 gap-3">
            {[
              { path: '/', name: 'Beranda' },
              { path: '/berita', name: 'Berita' },
              { path: '/tentang', name: 'Tentang' },
              { path: '/struktur-em', name: 'Struktur EM' }
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className={`block py-2 font-medium ${
                  isActive(item.path) ? 'text-[#00094D]/90' : ''
                }`}>
                  {item.name}
                </span>
                <div className={`transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'w-full' 
                    : 'group-hover:w-full group-hover:left-0 right-0 origin-right w-0'
                } absolute bottom-0 h-0.5 bg-[#00094D]`}/>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
