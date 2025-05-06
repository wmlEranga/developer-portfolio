"use client";

import dynamic from "next/dynamic";

const DynamicSkills = dynamic(() => import("../homepage/skills"), {
  ssr: false,
});

export default function SkillsWrapper() {
  return <DynamicSkills />;
}
