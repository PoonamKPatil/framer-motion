"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-bold tracking-widest">BOTOL</h2>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Facebook size={18} />
              </Link>

              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Instagram size={18} />
              </Link>

              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE NAV */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

            <Link href="/products" className="hover:text-cyan-400 transition">
              Shop
            </Link>

            <Link href="/contact" className="hover:text-cyan-400 transition">
              Contact us
            </Link>

            <Link href="/about" className="hover:text-cyan-400 transition">
              About
            </Link>

            <Link href="/journal" className="hover:text-cyan-400 transition">
              Journal
            </Link>

            <Link href="/custom" className="hover:text-cyan-400 transition">
              Custom
            </Link>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <p>© {new Date().getFullYear()} BOTOL. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-white transition">
              FAQ’s
            </Link>
            <Link href="#" className="hover:text-white transition">
              Returns
            </Link>
            <Link href="#" className="hover:text-white transition">
              Ordering
            </Link>
            <Link href="#" className="hover:text-white transition">
              Shipping
            </Link>
            <Link href="#" className="hover:text-white transition">
              Personalization Policies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
