import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface Slides {
  id: number;
  url: string;
}

type Props = {
  slides: Slides[];
  autoSlide: boolean;
  autoSlideInterval: number;
};

export default function Carousel({
  slides,
  autoSlide,
  autoSlideInterval,
}: Props) {
  const navigate = useNavigate();
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex relative rounded-3xl transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <>
            <div className="relative inset-0 md:hidden">
              <button className="absolute w-32 shadow-md lg:text-20 bg-black/40 text-white rounded-md">
                Bản tin 0{s.id}
              </button>
            </div>
            <img
              className="rounded-3xl"
              src={s.url}
              alt={`Bản tin 0${s.id}`}
            ></img>
          </>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-black/80 text-white/80 hover:bg-gray-500"
        >
          <BiChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-black/80 text-white/80 hover:bg-gray-500"
        >
          <BiChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-4">
          {slides.map((_, i) => (
            <div
              onClick={() => navigate(`${_.id}`)}
              key={_.id}
              className={`
              transition-all cursor-pointer duration-500 w-20 lg:w-28 h-5 text-center text-white bg-black rounded-lg
              ${curr === i ? "scale-125" : "bg-opacity-50"}
            `}
            >
              Bản tin 0{_.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
