import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Product from "./components/Product";
import Purchase from "./components/Purchase";
import SideNav from "./components/SideNav";
import Breadcrumb from "./components/Breadcrumb";



export default function Home() {
  return (
    <>
        <Breadcrumb />
        <div className="flex flex-row-reverse">
          <SideNav />
          <Gallery />
          <Product />
          <Purchase />
        </div>
    </>
  );
}
