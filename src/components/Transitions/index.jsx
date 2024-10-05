import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <>
      {children} {/* Render the children content */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-gray-100 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
      />
      {/* <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-gray-100 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
      /> */}
    </>
  );
};

export default Transition;
