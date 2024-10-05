import React from 'react';
import Marquee from "react-fast-marquee";
import Plus from "../../assets/svg/plus.svg"
import PlusYellow from "../../assets/svg/plus-yellow.svg"

export default function StripsLabel() {
  return (
    <>
      <div className="absolute w-full left-0 bottom-8 sm:bottom-16 md:bottom-20 lg:bottom-28">
        <div className="relative w-[110%] left-1/2 -translate-x-1/2">
          <Marquee
            gradient={false}
            speed={80}
            className="bg-black font-bold -rotate-6 overflow-hidden"
          >
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mx-2 sm:mx-3 md:mx-4 py-4 sm:py-6 md:py-8"
              >
                <p className="text-2xl sm:text-md md:text-4xl font-bold text-yellow-400">NAUFAL YUSUF</p>
                <img src={PlusYellow} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="absolute w-full left-0 bottom-8 sm:bottom-16 md:bottom-20 lg:bottom-28">
        <div className="relative w-[110%] left-1/2 -translate-x-1/2">
          <Marquee
            gradient={false}
            speed={80}
            className="bg-yellow-400 rotate-6 overflow-hidden"
          >
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mx-2 sm:mx-3 md:mx-4 py-4 sm:py-6 md:py-8"
              >
                <p className="text-2xl sm:text-md md:text-4xl font-bold text-black">NAUFAL YUSUF</p>
                <img src={Plus} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}