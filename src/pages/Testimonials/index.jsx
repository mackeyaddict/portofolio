import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CommentCard from "../../components/CommentCard";
import MePict from "../../assets/images/me-pict.png";
import BubbleChat from "../../assets/images/bubble-chat.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    comment:
      "Naufal developed an amazing Coffee Shop Order Web App for us. The user interface is intuitive, and it has significantly improved our order processing efficiency. Highly recommended!",
    project: "Coffee Shop Order Web App",
    rating: 5,
  },
  {
    name: "Michael Chen",
    comment:
      "The Stock Management App Naufal created for our vegetable shop is a game-changer. It's easy to use and has greatly improved our inventory tracking. Excellent work!",
    project: "Vegetable Shop Stock Management App",
    rating: 4.5,
  },
  {
    name: "Aisha Patel",
    comment:
      "Naufal designed a beautiful and meaningful logo for Ummai. It perfectly captures our brand essence. His creativity and attention to detail are impressive!",
    project: "Ummai Logo Design",
    rating: 5,
  },
  {
    name: "David Garcia",
    comment:
      "I'm extremely satisfied with the video editing Naufal did for my personal project. He has a great eye for detail and really brought my vision to life. Professional and talented!",
    project: "Personal Video Editing",
    rating: 4.5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="bg-yellow-400 py-12 rounded-[64px] overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <motion.div
            className="w-full lg:w-1/2 text-center md:text-start"
            variants={itemVariants}
          >
            <motion.h2
              className="text-5xl font-bold text-secondary-500 mb-4"
              variants={itemVariants}
            >
              Hear From My Happy Clients
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-500"
              variants={itemVariants}
            >
              Don't just take my word for it. Here's what some of my clients
              have to say about my work on various projects, from web
              development to design and video editing.
            </motion.p>
            <motion.img
              src={BubbleChat}
              alt="Bubble Chat"
              className="w-full hidden md:block"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="hidden lg:flex flex-col gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <CommentCard
                    imageSrc={MePict}
                    name={testimonial.name}
                    comment={testimonial.comment}
                    project={testimonial.project}
                    rating={testimonial.rating}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="block lg:hidden"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="py-2 px-2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <CommentCard
                  imageSrc={MePict}
                  name={testimonial.name}
                  comment={testimonial.comment}
                  project={testimonial.project}
                  rating={testimonial.rating}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}