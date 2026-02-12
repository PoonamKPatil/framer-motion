"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6">

      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 text-white p-10 md:p-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <Image
              src="/images/bottle1.png"  // replace with your image
              alt="Bottle"
              width={500}
              height={600}
              className="object-contain -rotate-12 scale-110"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in touch with us
            </h2>

            <p className="text-gray-300 mt-3 text-sm">
              Hi, I'm Amanda. Need help? Use the form below or email me at
              hello@xyz.com
            </p>

            <form className="mt-8 space-y-6">

              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Rachel Joe"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Rachel@domain.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Type your query here..."
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full font-medium hover:scale-105 transition shadow-lg"
              >
                SUBMIT
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
