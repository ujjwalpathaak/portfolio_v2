import React, { useState, useEffect } from "react";
import TruncatedText from "./TruncatedText";

const Testimonial = ({ testimonials, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [testimonials.length, interval]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full text-justify">
      <div className="mb-4">
        <p className="mb-2 italic flex items-start">
          <img src="./quote.svg" alt="quote" className="w-7 " />
          <TruncatedText text={testimonials[currentIndex].message} />
        </p>
        <div className="flex flex-col items-end text-base">
          <a
            href={testimonials[currentIndex].linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group font-semibold relative text-black transition duration-300 hover:bg-yellow-300"
          >
            {testimonials[currentIndex].name }
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="text-sm italic">
            {testimonials[currentIndex].position}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-[5px] h-[5px] rounded-full ${currentIndex === index ? "bg-text" : "bg-gray-300"
              }`}
            onClick={() => goToTestimonial(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;