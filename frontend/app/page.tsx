import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionsSection";
import ShopByShape from "./components/ShopByShape";
import SuccessStory from "./components/SuccessStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection></HeroSection>
        <CollectionsSection></CollectionsSection>
        <ShopByShape></ShopByShape>
        <ServicesSection></ServicesSection>
        <SuccessStory></SuccessStory>
        <Footer></Footer>
      </main>
  );
}
