"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const features = [
  {
    id: 1,
    title: "Wide Mouth Bottles To Clean Easily.",
  },
  {
    id: 2,
    title: "Insulated Bottles For Hot And Cold Technology",
  },
  {
    id: 3,
    title: "Variation In Sizes, Styles, And Material",
  },
  {
    id: 4,
    title: "Made In India To Serve Authenticity",
  },
]

export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex items-center py-24 px-6 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/black.avif')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About us
          </h2>

          <p className="uppercase text-sm tracking-widest mt-3 text-gray-300">
            Health, Happiness, & Sustainability
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            LEARN MORE
          </Link>
        </motion.div>

        {/* RIGHT FEATURE CARDS */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition"
            >
              <div className="text-4xl font-bold text-white/80">
                {feature.id}
              </div>

              <div className="text-lg font-medium">
                {feature.title}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
