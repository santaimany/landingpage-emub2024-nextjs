import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    theme: {
      extend: {
        colors: {
          'primary-charcoalGray': '#2D2D2D',
          'primary-tealBlue': '#008080',
          'primary-white': '#FFFFFF',
        },
        fontFamily: {
          'helvetica-extraBold': ['Helvetica Neue ExtraBold', 'sans-serif'],
          'helvetica-regular': ['Helvetica Neue Regular', 'sans-serif'],
        }
      }
    }
  
};

export default nextConfig;
