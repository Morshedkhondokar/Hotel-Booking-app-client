import {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RoomsHeader = () => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/e7/cc/79/e7cc79badd658f1510eb2e322fa3cf3f.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-50"></div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="relative text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg"
      >
        Our Rooms
      </h1>
    </div>
  );
};

export default RoomsHeader;
