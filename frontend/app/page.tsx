"use client";
import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionsSection";
import ShopByShape from "./components/ShopByShape";
import SuccessStory from "./components/SuccessStory";
import Footer from "./components/Footer";
import CareSection from "./components/CareSection";
import NewArrivals from "./components/NewArrivals";

export default function Home() {
  return (
      <main >
        
        <CollectionsSection></CollectionsSection>
        <NewArrivals></NewArrivals>
        <ShopByShape></ShopByShape>
        <CareSection /> 
        <ServicesSection></ServicesSection>
        
        <Footer></Footer>
      </main>
  );
}
