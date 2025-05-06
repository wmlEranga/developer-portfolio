"use client";

import { certificatesData } from "@/utils/data/certificates-data";
import CertificateCard from "./certificate-card";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Check if we're on mobile for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCertificate = (index, animate = true) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      setCurrentIndex(index);

      // Calculate scroll position directly from index
      const realIndex = index + 1; // Account for the phantom first card
      const cardElements = container.querySelectorAll(".certificate-card");

      if (cardElements && cardElements.length > 0) {
        const cardElement = cardElements[realIndex];

        if (cardElement) {
          // Get position of the target card
          const cardLeft = cardElement.offsetLeft;
          const cardWidth = cardElement.offsetWidth;
          const containerWidth = container.offsetWidth;

          // Calculate center position
          const scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

          container.scrollTo({
            left: scrollLeft,
            behavior: animate ? "smooth" : "auto",
          });
        }
      }
    }
  };

  // Initial scroll to first certificate after component mounts
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      scrollToCertificate(0, false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const goToNextCertificate = () => {
    const newIndex = (currentIndex + 1) % certificatesData.length;
    scrollToCertificate(newIndex);
  };

  const goToPrevCertificate = () => {
    const newIndex =
      (currentIndex - 1 + certificatesData.length) % certificatesData.length;
    scrollToCertificate(newIndex);
  };

  // Update index when scrolling manually
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const cards = Array.from(
          container.querySelectorAll(".certificate-card")
        ).slice(1, certificatesData.length + 1); // Skip phantom card
        const containerCenter =
          container.scrollLeft + container.offsetWidth / 2;

        // Find closest card to the center
        let closestCardIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, idx) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCardIndex = idx;
          }
        });

        if (closestCardIndex !== currentIndex) {
          setCurrentIndex(closestCardIndex);
        }
      }
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex]);

  return (
    <div id="certificates" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            CERTIFICATES
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-12 left-0 right-0 z-10 px-4 md:px-8">
          <button
            onClick={goToPrevCertificate}
            className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1a1443] text-[#EFF3F4] shadow-lg hover:bg-[#231d4b] transition-all duration-300 hover:scale-110"
            aria-label="Previous certificate"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNextCertificate}
            className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1a1443] text-[#EFF3F4] shadow-lg hover:bg-[#231d4b] transition-all duration-300 hover:scale-110"
            aria-label="Next certificate"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Enhanced Carousel Container with Infinite Loop Effect */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
              paddingLeft: "15%", // Reduced padding to allow for wider cards
              paddingRight: "15%", // Reduced padding to allow for wider cards
            }}
          >
            {/* Phantom last card for infinite loop effect */}
            <div
              className="certificate-card flex-shrink-0 w-[90%] md:w-[75%] lg:w-[70%] mx-[8px] transition-all duration-300 opacity-60 scale-90 cursor-pointer phantom-card"
              onClick={() => scrollToCertificate(certificatesData.length - 1)}
            >
              <div className="mx-auto transition-all duration-300">
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_20px_0_rgba(0,0,0,0.2)] transition-all duration-[0.5s]">
                  <CertificateCard
                    certificate={certificatesData[certificatesData.length - 1]}
                  />
                </div>
              </div>
            </div>

            {/* Regular certificates */}
            {certificatesData.map((certificate, index) => (
              <div
                id={`certificate-card-${index + 1}`}
                key={certificate.id || index}
                className={`certificate-card flex-shrink-0 w-[90%] md:w-[75%] lg:w-[70%] mx-[8px] transition-all duration-500 ${
                  currentIndex === index
                    ? "opacity-100 scale-100 z-20"
                    : "opacity-60 scale-90 cursor-pointer z-10"
                }`}
                onClick={() =>
                  index !== currentIndex && scrollToCertificate(index)
                }
              >
                <div className="mx-auto transition-all duration-300 hover:scale-[1.02]">
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <CertificateCard certificate={certificate} />
                  </div>
                </div>
              </div>
            ))}

            {/* Phantom first card for infinite loop effect */}
            <div
              className="certificate-card flex-shrink-0 w-[90%] md:w-[75%] lg:w-[70%] mx-[8px] transition-all duration-300 opacity-60 scale-90 cursor-pointer phantom-card"
              onClick={() => scrollToCertificate(0)}
            >
              <div className="mx-auto transition-all duration-300">
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_20px_0_rgba(0,0,0,0.2)] transition-all duration-[0.5s]">
                  <CertificateCard certificate={certificatesData[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {certificatesData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCertificate(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-6 bg-[#16f2b3]" : "w-2 bg-[#1a1443]"
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
