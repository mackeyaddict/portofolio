import React, { useState, useEffect } from 'react';
import { FaCode, FaPaintBrush, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FileCard ({ imageSrc, fileName, projectType })  {
  const getIcon = () => {
    switch (projectType) {
      case 'web':
        return <FaCode size={20}/>;
      case 'design':
        return <FaPaintBrush size={20}/>;
      case 'video':
        return <FaVideo size={20}/>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-56 md:max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 bg-yellow-400 rounded-lg shadow-neo-left-4 overflow-hidden hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer group"
    >
      <div className="absolute inset-0 flex items-center justify-center px-2 z-10">
        <img 
          src={imageSrc} 
          alt="File content" 
          className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-200 rounded-t-3xl px-2 py-12 transition-all duration-300 ease-in-out group-hover:py-4 z-20 shadow-smooth-top">
        <p className="text-gray-800 text-center text-xl font-semibold truncate">{fileName}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-300 py-2 z-30 transition-all duration-300 ease-in-out group-hover:py-1"></div>
      <div className="absolute top-0 right-0 w-24 h-8 bg-white rounded-bl-lg transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>
      {getIcon() && (
        <div className="absolute top-2 left-3">
          {getIcon()}
        </div>
      )}
    </motion.div>
  );
};

const InfiniteScrollFileCards = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const fetchMoreCards = () => {
    // Simulating an API call to fetch more cards
    const newCards = Array.from({ length: 10 }, (_, i) => ({
      id: page * 10 + i,
      imageSrc: `/api/placeholder/${300 + i}/${200 + i}`,
      fileName: `File ${page * 10 + i + 1}`,
      projectType: ['web', 'design', 'video'][Math.floor(Math.random() * 3)]
    }));
    setCards(prevCards => [...prevCards, ...newCards]);
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    fetchMoreCards();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchMoreCards();
    }
  }, [inView]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map(card => (
          <FileCard key={card.id} {...card} />
        ))}
      </div>
      <div ref={ref} className="h-10 mt-4" />
    </div>
  );
};
