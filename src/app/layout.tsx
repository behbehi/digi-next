"use client"
import React, { useState } from 'react';
import './globals.css'
import Navbar from './components/Navbar'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export const Context = React.createContext();


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
  }) {
  
  const [show, setShow] = useState(false);

  return (
    <html lang="en">
      <body className="pb-20 font-yekanb">
        <Context.Provider value={[show, setShow]}>
          <Navbar />
          {children}
        </Context.Provider>
      </body>
    </html>
  );
}
