import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface Props {
  array: string[];
}

const SPRING_OPTIONS = {
  type: "spring",
  mass: 5,
  stiffness: 400,
  damping: 50,
};

const DragCarrousel: React.FC<Props> = ({ array }) => {
  const [itemProduct, setItemProduct] = useState(0);
  const DRAG_BUFFER = 25;
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && itemProduct < array.length - 1) {
      setItemProduct((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && itemProduct > 0) {
      setItemProduct((pv) => pv - 1);
    }
  };
  return (
    <div className="relative w-[90%] mx-auto overflow-hidden my-5 md:hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${itemProduct * 80}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Items itemProduct={itemProduct} array={array} />
      </motion.div>
    </div>
  );
};

export default DragCarrousel;

interface PropsImage {
  itemProduct: number;
  array: string[];
}

const Items: React.FC<PropsImage> = ({ array, itemProduct }) => {
  return (
    <>
      {array.map((content, index) => {
        return (
          <motion.div
            key={index}
            animate={{
              scale: itemProduct === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="w-[85%] shrink-0"
          >
            <div className="bg-secondary text-white py-7 px-10 rounded-2xl flex flex-col gap-5 items-start">
              <p>{content}</p>
              <button
                type="button"
                className="flex items-center gap-4 text-main"
              >
                Learn More <img src="/icons/arrow-green.svg" alt="arrow" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
