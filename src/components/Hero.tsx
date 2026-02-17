"use client"

import { motion } from "framer-motion"
const capVariants = {
  closed: { y: -50 },
  open: {
    y: -160,
    transition: { duration: 1.5, ease: "easeOut" }
  }
}

const bodyVariants = {
  closed: { y: -160 },
  open: {
    y: 80,
    transition: { duration: 1.5, ease: "easeOut" }
  }
}

const sideBottleLeftPop = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -15,   // tilted left
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: -15,   // stays tilted
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
}

const sideBottleRightPop = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: 15,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 15,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    }
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center 
                    pt-20 sm:pt-24 md:pt-32 
                    text-center overflow-hidden">
      <motion.img
        src="/images/bottle-cap.png"
        className="absolute top-32 left-1/2 -translate-x-1/2 z-30 w-62"
        variants={capVariants}
        initial="closed"
        animate="open"
      />
      <div className="absolute left-40 bottom-40">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
        />

        <motion.img
          src="/images/borosil.png"
          className="absolute inset-0 m-auto w-30"
          variants={sideBottleLeftPop}
          initial="hidden"
          animate="show"
        />
      </div>

      {/* Right Gradient Circle */}
      <div className="absolute right-40 bottom-40">
        {/* Gradient Circle */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 0.8, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-48 h-48 
                    rounded-full 
                    bg-gradient-to-r from-cyan-400 to-blue-600
                    z-0"
        />

        {/* Bottle */}
        <motion.img
          src="/images/borosil.png"
          className="absolute inset-0 m-auto w-30 z-10"
          variants={sideBottleRightPop}
          initial="hidden"
          animate="show"
        />

      </div>

      {/* Circle */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0
               w-64 h-64 sm:w-80 sm:h-80 md:w-lg md:h-128
               rounded-full 
               bg-linear-to-r from-cyan-500 to-blue-500 p-1
               flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-white"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          The Ultimate Companion <br /> for Hydration
        </h1>

        <p className="mt-6 text-gray-700 text-sm sm:text-base">
          We believe in the power of hydration.
        </p>

        <p className="text-gray-700 text-sm sm:text-base">
          Our mission is simple yet vital.
        </p>

        <button className="mt-8 bg-linear-to-r from-cyan-500 to-blue-500 
                       text-white px-6 py-3 rounded-full shadow-lg 
                       hover:scale-105 transition">
          Inquiry Now
        </button>
      </motion.div>
      <motion.img
        src="/images/bottle-body.png"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-100"
        variants={bodyVariants}
        initial="closed"
        animate="open"
      />

    </section>
  )
}