import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductFeatureSection from "../components/ProductFeatureSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <ProductFeatureSection />
    </main>
  )
}
