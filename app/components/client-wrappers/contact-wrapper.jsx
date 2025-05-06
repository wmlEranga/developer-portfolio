"use client";

import dynamic from "next/dynamic";

const DynamicContactSection = dynamic(() => import("../homepage/contact"), {
  ssr: false,
});

export default function ContactWrapper() {
  return <DynamicContactSection />;
}
