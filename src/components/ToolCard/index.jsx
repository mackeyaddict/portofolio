import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ToolCard({ tool }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <motion.div
      ref={cardRef}
      className="w-full py-12 px-4"
      style={{ scale, opacity, y }}
    >
      <motion.div
        className="bg-white p-8 rounded-3xl border-8 border-black shadow-neo-8 transform transition-all duration-300 ease-in-out hover:shadow-neo-12 hover:-translate-x-2 hover:-translate-y-2"
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex justify-center items-center h-40"
          whileHover={{ 
            rotate: 360,
            transition: { duration: 0.5, type: "spring", stiffness: 260, damping: 20 }
          }}
        >
          <tool.icon style={{ color: tool.color }} className="text-8xl" />
        </motion.div>
        <h2 className="text-3xl font-black text-center mt-6 text-black uppercase">{tool.name}</h2>
      </motion.div>
    </motion.div>
  );
};
