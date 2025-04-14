"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [user , setUser] = useState();
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      localStorage.setItem("products", JSON.stringify(res.data));
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
      console.log(user);
      setUser(user);
    }
    fetchProducts();
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-25 py-20">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      {user?
       <h4 className="text-sm font-bold text-center mb-6"> username :{`${user.username}`}</h4> :
       ""}
      </div>
      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
       {  products.map((product, idx)=>{
     
           return <ProductCard key={idx} product={product}/>
         })}
        </div>
         )}
    </div>
  );
}
