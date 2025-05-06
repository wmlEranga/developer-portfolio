"use client";

import dynamic from "next/dynamic";

const DynamicAchievements = dynamic(() => import("../homepage/achievements"), {
  ssr: false,
});

export default function AchievementsWrapper() {
  return <DynamicAchievements />;
}
