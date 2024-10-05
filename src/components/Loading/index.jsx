import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Brutalist Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 border-4 border-black"
        initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 border-4 border-black"
        initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-28 h-28 bg-blue-500 border-4 border-black"
        initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Loading Text */}
      <motion.div
        className="bg-primary-500 border-4 border-black text-3xl text-secondary-500 font-bold px-8 py-4 mb-6 z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        WELCOME
      </motion.div>

      {/* Pulsating Square for Brutalist Style */}
      <motion.div
        className="bg-pink-500 w-16 h-16 border-4 border-black z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Please Wait Text */}
      <motion.div
        className="mt-6 font-bold text-xl bg-blue-500 border-4 border-black px-4 py-2 z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
      >
        Please wait...
      </motion.div>
    </motion.div>
  );
};

export default Loading;
