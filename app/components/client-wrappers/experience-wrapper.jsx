"use client";

import dynamic from "next/dynamic";

const DynamicExperience = dynamic(() => import("../homepage/experience"), {
  ssr: false,
});

export default function ExperienceWrapper() {
  return <DynamicExperience />;
}
