"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">

      <div className="relative flex flex-col items-center">

        {/* TEXT INSIDE BOTTLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={open ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-20 text-center max-w-xl z-20"
        >
          <h1 className="text-4xl font-bold leading-tight">
            The Ultimate Companion <br /> for Hydration
          </h1>

          <p className="mt-4 text-gray-600">
            We believe in the power of hydration.
          </p>
        </motion.div>

        {/* BOTTLE BODY */}
        <div className="relative z-10">
          <Image
            src="/images/bottle1.png"
            alt="Bottle Body"
            width={180}
            height={450}
          />
        </div>

        {/* CAP */}
        <motion.div
          initial={{ y: 0 }}
          animate={open ? { y: -150 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 z-30"
        >
          <Image
            src="/images/cap.png"
            alt="Bottle Cap"
            width={180}
            height={120}
          />
        </motion.div>

      </div>
    </section>
  )
}
