import Carousel from "../Slider/Carousel";
import Bantin1 from "../../assets/ban tin 01.png";
import Bantin2 from "../../assets/ban tin 02.png";
import Bantin3 from "../../assets/ban tin 03.png";
import BanTinTriet from "../../assets/BẢN TIN TRIẾT.png";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    url: Bantin1,
  },
  {
    id: 2,
    url: Bantin2,
  },
  {
    id: 3,
    url: Bantin3,
  },
];

const News = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 px-4 lg:pl-[100px] pt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="md:col-span-1"
      >
        <img src={BanTinTriet} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="md:col-start-2"
      >
        <Carousel autoSlide={true} autoSlideInterval={2000} slides={slides} />
      </motion.div>
    </div>
  );
};

export default News;
