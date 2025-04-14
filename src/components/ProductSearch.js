"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
        <div className="flex justify-between ">
        <h2 className="text-2xl font-bold mb-4">Search Products</h2>
         <h4 className="text-md font-bold mb-4">
         <Link href={`/product`}>
               back to home
            </Link>
            </h4>
        </div>
     
       
      <input
        type="text"
        placeholder="Search by product name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, idx) => {
            return <ProductCard key={idx} product={item} />;
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
