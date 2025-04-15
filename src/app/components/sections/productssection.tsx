"use client";
import { useState } from "react";
import { Input } from "../common/input";
import { clsx } from "clsx";
import { WobbleCardDemo } from "../common/wobblecarddemo";
const ProductsSection = () => {
  

  return (


    <section id="products-grid" className="bg-black h-screen flex flex-col items-center justify-center p-8 md:p-16">

    <h2 className="text-3xl font-bold mb-16 text-center">See our products</h2>

    <WobbleCardDemo />

    </section>

   
  );

};

export default ProductsSection;