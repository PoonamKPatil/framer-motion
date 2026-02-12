"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Small Floating Bottles (Left) */}
      <motion.div
        initial={{ rotate: 12, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1 } }}
        className="absolute left-30 top-1/2 -translate-y-1/2 w-[160px] h-[160px]"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <Image
            src="/images/bottle.png"
            alt="Small Bottle"
            width={50}
            height={100}
          />
        </div>
      </motion.div>

      {/* Small Floating Bottles (Right) */}
      <motion.div
        initial={{ rotate: -12, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", opacity: { duration: 1 }  }}
        className="absolute right-30 top-1/2 -translate-y-1/2 w-[160px] h-[160px]"
      >
        {/* Circle Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

        {/* Bottle Image */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <Image
            src="/images/bottle.png"
            alt="Small Bottle"
            width={50}
            height={100}
          />
        </div>
      </motion.div>
      <div className="relative z-10 flex flex-col items-center">
        {/* Cap Floating */}
        <motion.div
          initial={{ y: 230, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <Image
            src="/images/bottle-cap.png"
            alt="Bottle Cap"
            width={220}
            height={280}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="text-5xl font-bold leading-tight">
            The Ultimate Companion <br /> for Hydration
          </h1>

          <p className="mt-6 text-gray-600">
            We believe in the power of hydration.
            Our mission is simple yet vital.
          </p>

          <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Inquiry Now
          </button>
        </motion.div>

        {/* Main Bottle */}
        <motion.div
          initial={{ y: -230, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            // repeat: Infinity,
            // ease: "easeInOut",
          }}
          className="relative mt-16"
        >
          <Image
            src="/images/bottle-body.png"
            alt="Bottle"
            width={350}
            height={350}
            className="object-contain"
          />
        </motion.div>
        </div>
    </section>
  )
}
