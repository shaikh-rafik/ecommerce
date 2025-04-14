"use client";

import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();   
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];


    const foundProduct = allProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10">Loading product...</div>;
  }

  return (
    <div className="min-h-screen  flex flex-col items-center px-60 py-20 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Single Product</h1>
        <div className=" w-full p-6  space-y-4">
        <ProductCard product={product}/>
        </div>
    </div>
  );
}
