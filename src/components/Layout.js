import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NavTwo from './NavTwo';
const Layout = (props) => {
  return (
    <div className='bg-stone-800'>
      <Navbar />
      <NavTwo />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
