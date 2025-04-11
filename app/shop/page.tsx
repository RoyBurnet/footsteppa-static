import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "T-Shirts", "Hoodies", "Accessories", "Vinyl", "Digital"]

const products = [
  {
    name: "Kool Logo Hoodie",
    price: "£49.99",
    image: "/placeholder.svg",
    category: "Hoodies",
    slug: "kool-logo-hoodie",
  },
  {
    name: "Rinse Logo Hoodie",
    price: "£49.99",
    image: "/placeholder.svg",
    category: "Hoodies",
    slug: "rinse-logo-hoodie-1",
  },
  {
    name: "Rinse 30th Anniversary Classic Black T-Shirt",
    price: "£29.99",
    image: "/placeholder.svg",
    category: "T-Shirts",
    slug: "rinse-30th-anniversary-classic-black-t-shirt",
  },
  {
    name: "Kool FM Est. 1991 T-Shirt Limited Edition Green",
    price: "£29.99",
    image: "/placeholder.svg",
    category: "T-Shirts",
    slug: "kool-fm-est-1991-t-shirt-limited-edition-green",
  },
  {
    name: "Rinse Worldwide T-Shirt Limited Edition",
    price: "£29.99",
    image: "/placeholder.svg",
    category: "T-Shirts",
    slug: "rinse-worldwide-t-shirt-limited-edition",
  },
  {
    name: "Jungle Fever Short Sleeve Black T-Shirt",
    price: "£29.99",
    image: "/placeholder.svg",
    category: "T-Shirts",
    slug: "jungle-fever-short-sleeve-black-t-shirt",
  },
  {
    name: "Rinse R Sticker",
    price: "£2.99",
    image: "/placeholder.svg",
    category: "Accessories",
    slug: "rinse-r-sticker",
  },
  {
    name: "Rinse Slipmats",
    price: "£14.99",
    image: "/placeholder.svg",
    category: "Accessories",
    slug: "rinse-slipmats",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Product */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Featured Product"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <Badge className="mb-2 bg-white text-black">New Release</Badge>
              <h2 className="text-4xl font-bold mb-4">Rinse 30th Anniversary Collection</h2>
              <p className="text-xl mb-6 max-w-xl">
                Celebrate 30 years of underground music with our limited edition collection.
              </p>
              <Button size="lg">Shop Now</Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link href={`/shop/products/${product.slug}`} key={index} className="group">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-gray-800">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-base group-hover:underline">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.price}</p>
              <Badge variant="outline" className="mt-2 text-xs">
                {product.category}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-400 mb-6">
              Be the first to know about new releases, restocks and exclusive offers.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
