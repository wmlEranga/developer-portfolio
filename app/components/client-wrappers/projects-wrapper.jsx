"use client";

import dynamic from "next/dynamic";

const DynamicProjects = dynamic(() => import("../homepage/projects"), {
  ssr: false,
});

export default function ProjectsWrapper() {
  return <DynamicProjects />;
}
