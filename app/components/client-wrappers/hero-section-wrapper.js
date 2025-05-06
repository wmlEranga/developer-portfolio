"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr: false in a Client Component is allowed
const DynamicHeroSection = dynamic(() => import("../homepage/hero-section"), {
  ssr: false,
});

export default function HeroSectionWrapper() {
  return <DynamicHeroSection />;
}
