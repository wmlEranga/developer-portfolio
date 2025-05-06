"use client";

import dynamic from "next/dynamic";

const DynamicAboutSection = dynamic(() => import("../homepage/about"), {
  ssr: false,
});

export default function AboutWrapper() {
  return <DynamicAboutSection />;
}
