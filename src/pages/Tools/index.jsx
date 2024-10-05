import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiCodeigniter,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiCanva,
  SiAdobeillustrator,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ToolCard from "../../components/ToolCard";

const tools = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
  { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
  { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999FF" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
];

export default function Tools() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-yellow-400 overflow-hidden relative min-h-screen rounded-[64px]"
    >
      <motion.div
        className="w-full mx-auto max-w-6xl px-4 mb-24"
        style={{
          scale: scale,
          rotate: rotate,
        }}
      >
        <h1 className="font-black text-center py-4 text-white uppercase relative z-10 text-6xl">
          Tools & Skills
        </h1>
        <p className="text-white text-center text-4xl font-medium mt-4">
          A selection of tools and technologies that I have worked with,
          enabling me to build and design creative solutions.
        </p>
      </motion.div>

      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          modules={[FreeMode]}
          className="w-full cursor-grab"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <ToolCard tool={tool} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8 text-white text-lg font-semibold">
        <p>Swipe to explore more</p>
        <motion.div
          className="inline-block"
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          →
        </motion.div>
      </div>
    </section>
  );
}
