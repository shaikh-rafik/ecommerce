import { useEffect, useState } from "react"
import axios from "axios"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function CardInfo({ cartinfo }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${cartinfo.productId}`)
        setProduct(res.data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    if (cartinfo?.productId) {
      fetchProduct()
    }
  }, [cartinfo?.productId])

  if (!product) return <p>Loading product info...</p>

  return (
    <div className="grid grid-cols-2 items-center gap-4 border p-4 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.title}
        width={80}
        height={80}
        className="rounded-md object-cover"
        style={{ aspectRatio: "80/80", objectFit: "cover" }}
      />
      <div className="grid gap-2">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{product.description}</p>
        <p className="text-sm font-semibold">${product.price}</p>
        <div className="flex items-center gap-4">
          <Select defaultValue="1" className="w-20">
            <SelectTrigger>
              <SelectValue placeholder="Qty" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map(n => (
                <SelectItem key={n} value={String(n)}>{n}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-red-600"
            onClick={() => console.log("Remove item")}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
