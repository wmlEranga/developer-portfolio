"use client";

import { achievementsData } from "@/utils/data/achievements-data";
import Image from "next/image";
import { FaTrophy, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Achievements = () => {
  return (
    <div id="achievements" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            ACHIEVEMENTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] max-w-[500px] w-full"
            >
              <div className="relative h-[550px] w-full">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#16f2b3] mb-3">
                  {achievement.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaBuilding className="text-[#16f2b3] flex-shrink-0" />
                  <span>{achievement.organization}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <FaCalendarAlt className="text-[#16f2b3] flex-shrink-0" />
                  <span>{achievement.date}</span>
                </div>

                <div className="flex items-start gap-2 text-gray-300">
                  <FaTrophy className="text-[#16f2b3] flex-shrink-0 mt-1" />
                  <p>{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
