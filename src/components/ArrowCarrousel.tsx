import { useState } from "react";
import { all_testimonials } from "../data/testimonials";
import { motion } from "framer-motion";

const ArrowCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cantTestimonials = all_testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cantTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cantTestimonials) % cantTestimonials
    );
  };

  return (
    <div className="w-full max-w-[550px] mx-auto">
      <div className="text-white w-full overflow-hidden flex items-center desktop:overflow-visible desktop:gap-4">
        {all_testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="w-full shrink-0"
            initial={{ x: 0 }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            <ElementMessage testimonial={item.testimonial} />
            <div className="flex flex-col items-center mb-7 mt-4">
              <span className="text-main font-bold">{item.name}</span>
              <p>{item.cargo}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Section buttons */}
      <div className="flex items-center justify-between">
        <button onClick={handlePrev}>
          <img src="/icons/arrow-left.svg" alt="Arrow rigth" />
        </button>
        <div className="flex gap-4">
          {all_testimonials.map((_, index) => (
            <div
              key={index}
              className="bg-white h-3 w-3 rounded-full"
              style={{
                backgroundColor: `${index == currentIndex ? "#B9FF66" : "white"}`,
              }}
            ></div>
          ))}
        </div>
        <button onClick={handleNext}>
          <img src="/icons/arrow-rigth.svg" alt="Arrow rigth" />
        </button>
      </div>
    </div>
  );
};

export default ArrowCarrousel;

interface Props {
  testimonial: string;
}

const ElementMessage: React.FC<Props> = ({ testimonial }) => {
  return (
    <div
      className="bg-main p-1"
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 88%, 31% 88%, 22% 100%, 13% 88%, 0 88%)",
      }}
    >
      <div
        className=" bg-secondary px-4 pt-3 pb-14 desktop:px-8 desktop:pt-6"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 88%, 31% 88%, 22% 100%, 13% 88%, 0 88%)",
        }}
      >
        {testimonial}
      </div>
    </div>
  );
};
