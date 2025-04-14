"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCart from "@/components/Singlecart";

export default function ProductPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);

  const fetchCarts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/carts");
      setCart(res.data);
      // console.log(res.data)
    } catch (error) {
      console.error("Failed to fetch cart data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    const user = JSON.parse(localStorage.getItem("currentUser"));
   
    if (user?.id) {
      setCurrentUserId(user.id);
    }

    fetchCarts();
  }, []);

  const userCarts = cart.filter((c) => c.userId === currentUserId);
  
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-3/5 h-11/12 space-y-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : userCarts.length === 0 ? (
          <p className="text-center">No carts for this user.</p>
        ) : (
          userCarts.map((val, index) =>
         
            <SingleCart key={index} cart={val.products} />
            )
        )}
      </div>
    </div>
  );
}
