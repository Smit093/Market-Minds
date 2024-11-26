import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../../../css/MainContent.css'; 




export default function Layout() {
  return (
    <>  
      <Header  />
      <main className="main-content mt-16 ">
        <Outlet  />
      </main>
      <Footer />
    </>
  );
}
