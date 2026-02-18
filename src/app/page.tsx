import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import JournalPage from "./journal/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <ProductGrid/>
      <AboutPage/>
      <JournalPage/>
      <ContactPage/>
    </main>
  )
}
