"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductFeatureSection() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 min-h-[300px] mt-5">

        {/* LEFT SIDE - Lifestyle Bottle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#e6d7cd] flex items-center justify-center p-12"
        >
          <Image
            src="/images/full-bottle.png"   // your tilted bottle with hand image
            alt="Bottle in hand"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>


        {/* RIGHT SIDE - Features Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#0f1f23] text-white flex items-center p-16"
        >
          <div className="space-y-8">

            <FeatureItem text="Vacuum Bottles" />
            <FeatureItem text="Fridge Bottles & Jugs" />
            <FeatureItem text="Borosilicate Bottles" />
            <FeatureItem text="Kettles" />

          </div>
        </motion.div>

      </div>
    </section>
  )
}


function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <span className="text-lg">✔</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  )
}
