/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F5MxUceVbns
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

import CardInfo from "@/components/Cardinfo";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

export default function SingleCart({cart}) {
   console.log(cart);
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-8 rounded-lg border border-gray-200 p-8 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
       
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 ">
            {cart.map((ele, index)=>{
              return    <CardInfo key={index} cartinfo={ele}/>
            })}
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Items</p>
              <p className="text-sm font-medium">3</p>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Subtotal</p>
              <p className="text-sm font-medium">$199.97</p>
            </div>
            <Separator className="my-4" />
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

