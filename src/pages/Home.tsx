import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { FineSweets } from "../components/FineSweets";
import { Orders } from "../components/Orders";
import { Delivery } from "../components/Delivery";
import { Gallery } from "../components/Gallery";
import { Instagram } from "../components/Instagram";
import { Footer } from "../components/Footer";
import { WhatsAppFab } from "../components/WhatsAppFab";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <FineSweets />
        <Orders />
        <Delivery />
        <Gallery />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
