"use client";

import dynamic from "next/dynamic";

const DynamicEducation = dynamic(() => import("../homepage/education"), {
  ssr: false,
});

export default function EducationWrapper() {
  return <DynamicEducation />;
}
