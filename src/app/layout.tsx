// src/app/layout.tsx
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './styles/globals.css';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en"> 
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EM UB 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main className='font-helvetica'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
