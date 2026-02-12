"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Rainbow 600",
    image: "/images/bottle1.png",
  },
  {
    id: 2,
    name: "Rio 650",
    image: "/images/demo-bottle.png",
  },
  {
    id: 3,
    name: "Big Bull 1300",
    image: "/images/product-bottle.png",
  },
  {
    id: 4,
    name: "Rome 600",
    image: "/images/borosil.png",
  },
  {
    id: 5,
    name: "Rainbow 600",
    image: "/images/full-bottle.png",
  },
  {
    id: 6,
    name: "Rio 650",
    image: "/images/bottle1.png",
  },
]

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-4xl font-bold">Hydration Essentials</h2>
            <p className="text-gray-600 mt-2">
              Discover Our Range of Premium Water Bottles
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            VIEW MORE
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Card */}
              <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm shadow-md hover:scale-105 transition">
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
