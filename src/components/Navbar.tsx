import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="w-full flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">3OTOL</h1>
  
        <ul className="hidden md:flex gap-8 text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition"> Home </Link>
          <Link href="/products" className="hover:text-gray-900 transition"> Shop </Link>
          <Link href="/about" className="hover:text-gray-900 transition"> About </Link>
          <Link href="/journal" className="hover:text-gray-900 transition"> Journal </Link>
          <Link href="/contact" className="hover:text-gray-900 transition"> Contact Us </Link>
        </ul>
  
        <Link
          href="/products"
          className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Shop Now
        </Link>

      </nav>
    )
  }
  