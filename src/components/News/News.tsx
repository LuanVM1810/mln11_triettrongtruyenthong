import Img from "../../assets/AVATA MLN.jpg";
import Carousel from "../Slider/Carousel";

const slides = [
  "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19808114/pexels-photo-19808114/free-photo-of-gi-ng-v-t-nuoi-d-th-ng-con-meo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28540344/pexels-photo-28540344/free-photo-of-tach-ca-phe-d-c-bao-quanh-b-i-qu-oc-cho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const News = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 space-y-10 md:space-y-0 md:space-x-10 px-4 py-20 lg:pl-[150px] lg:py-20">
      <div className="md:col-span-2">
        <img src={Img} alt="" />
      </div>
      <div className="md:col-start-3">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default News;
