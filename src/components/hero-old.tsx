"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-18">
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold leading-tight max-w-2xl"
            >
                The Ultimate Companion <br /> for Hydration
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-gray-600 max-w-md"
            >
                We believe in the power of hydration. Our innovative bottles keep you fresh.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full"
            >
                Shop Now
            </motion.button>

            {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-16 w-60 h-60 bg-gray-200 rounded-full flex items-center justify-center"
            >
                Bottle Image Here
            </motion.div> */}
            <div className="relative mt-16 flex items-center justify-center">
                {/* Rotating Circle */}
                {/* <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                }}
                className="absolute w-72 h-72 rounded-full border-4 border-cyan-400  border-t-transparent"
                ></motion.div> */}
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[4px]">
  <div className="w-full h-full rounded-full bg-white"></div>
</div>




                {/* Bottle Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 3,
                        delay: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-60 h-60 rounded-full flex items-center justify-center z-10"
                >
                    <Image
                        src="/images/bottle.jpg"
                        alt="Bottle"
                        width={80}
                        height={80}                        
                        className="object-contain"
                    />

                </motion.div>

            </div>

        </section>
    )
}
