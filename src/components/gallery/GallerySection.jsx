import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);
  const lightboxRef = useRef(null);

  const images = [img1, img2, img3, img4, ];

  // ✅ GSAP Scroll Animation
  useGSAP(() => {
    gsap.from(gridRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%", 
        toggleActions: "play none none none",
        // markers:true,
       
      },
    });
  });

  // ✅ Lightbox Animation
  useGSAP(() => {
    if (selectedImage) {
      gsap.from(lightboxRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [selectedImage]);

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Hotel Gallery</h2>

      {/* ✅ Grid Gallery */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 gap-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
            }}
          >
            <img
              src={image}
              alt={`Hotel Photo ${index + 1}`}
              className="w-full h-56 object-cover group-hover:brightness-110 duration-300"
            />
          </div>
        ))}
      </div>

      {/* ✅ Lightbox */}
      {selectedImage && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
