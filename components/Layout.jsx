import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItemsCount(parsedCart.length);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Liefermax - Dein Lieferservice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation cartItemsCount={cartItemsCount} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
