import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This is a mock function to simulate fetching product data
function getProductData(slug: string) {
  return {
    name: "Footsteppa 30th Anniversary Classic Black T-Shirt",
    price: "£29.99",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    description:
      "Celebrate 30 years of Footsteppa with this limited edition anniversary t-shirt. Features the iconic Footsteppa logo on the front and a special 30th anniversary design on the back.",
    details: [
      "100% cotton",
      "Regular fit",
      "Crew neck",
      "Screen printed graphics",
      "Machine washable",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedProducts: [
      {
        name: "Footsteppa 30th Anniversary Classic White T-Shirt",
        price: "£29.99",
        image: "/placeholder.svg",
      },
      {
        name: "Footsteppa Logo Hoodie",
        price: "£49.99",
        image: "/placeholder.svg",
      },
      {
        name: "Kool FM Est. 1991 T-Shirt",
        price: "£29.99",
        image: "/placeholder.svg",
      },
      {
        name: "Footsteppa Slipmats",
        price: "£14.99",
        image: "/placeholder.svg",
      },
    ],
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductData(params.slug);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className={index === 0 ? "border-2 border-white" : ""}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="mb-2">
              <Link
                href="/shop"
                className="text-sm text-gray-400 hover:text-white"
              >
                Back to Shop
              </Link>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl mb-6">{product.price}</p>

            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Size</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={size === "M" ? "default" : "outline"}
                    className="w-12 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Button className="w-full py-6 text-lg">Add to Cart</Button>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-300">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Details</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {product.relatedProducts.map((item, index) => (
              <Link href="#" key={index} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-gray-800">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-base group-hover:underline">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">{item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
