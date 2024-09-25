import Carousel from "../Slider/Carousel";
import Bantin1 from "../../assets/ban tin 01.png";
import Bantin2 from "../../assets/ban tin 02.png";
import Bantin3 from "../../assets/ban tin 03.png";
import BanTinTriet from "../../assets/BẢN TIN TRIẾT.png";

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
      <div className="md:col-span-1">
        <img src={BanTinTriet} alt="" />
      </div>
      <div className="md:col-start-2">
        <Carousel autoSlide={true} autoSlideInterval={2000} slides={slides} />
      </div>
    </div>
  );
};

export default News;
