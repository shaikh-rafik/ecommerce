import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 group flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image || ""}
          width={400}
          height={400}
          alt={product.title}
          className="object-contain w-full h-64 transition-transform duration-300 group-hover:scale-105"
          />
      </div>
          

      <div className="flex-1 flex flex-col justify-between">
        <div>
      <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-gray-900">   
              {product.title}   
          </h3>
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
     </Link>
        </div>

 
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-bold text-indigo-600">${product.price}</p>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <HeartIcon className="w-4 h-4" />
            </Button>
              <Link href={'/product/cart'}>
            <Button variant="default" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" /> Add
            </Button>
              </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
