import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import FileCard from '../../components/FileCard';
import Work1 from '../../assets/images/work-1.png';
import Work2 from '../../assets/images/work-2.png';
import Work3 from '../../assets/images/work-3.png';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const workItems = [
  { imageSrc: Work1, fileName: 'Coffee Web App', projectType: 'web' },
  { imageSrc: Work2, fileName: 'Vegetable Shop Web App', projectType: 'video' },
  { imageSrc: Work3, fileName: 'RecyThing', projectType: 'web' },
  { imageSrc: Work1, fileName: 'RecyThing', projectType: 'web' },
  { imageSrc: Work1, fileName: 'RecyThing', projectType: 'web' },
];

export default function Work() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32 relative"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-center p-4 bg-yellow-300 transform -rotate-2 shadow-neo-4 rounded-xl"
          >
            Recent Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-lg text-gray-700 max-w-2xl"
          >
            A showcase of my latest projects, ranging from web apps to multimedia, designed with passion and creativity.
          </motion.p>

          <div className="w-full relative flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} neo-brutalism-bullet"></span>`;
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="w-full sm:max-w-16 md:max-w-xs lg:max-w-2xl xl:max-w-6xl h-96"
            >
              {workItems.map((item, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center px-4">
                  <FileCard imageSrc={item.imageSrc} fileName={item.fileName} projectType={item.projectType} />
                </SwiperSlide>
              ))}
            </Swiper>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute left-0 top-1/2 z-10 bg-yellow-300 text-white p-3 shadow-neo-2 rounded-md ${
                isBeginning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              <FiArrowLeft size={24} color="black" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute right-0 top-1/2 z-10 bg-yellow-300 text-white p-3 shadow-neo-2 rounded-md ${
                isEnd ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <FiArrowRight size={24} color="black" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
