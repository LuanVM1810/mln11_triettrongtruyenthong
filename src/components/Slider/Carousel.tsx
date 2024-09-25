import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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
            <div className="relative inset-0">
              <button className="absolute w-32 shadow-md lg:text-20 bg-black/40 text-white rounded-md">
                Bản tin 0{s.id}
              </button>
            </div>
            <div className="relative"></div>
            <img className="rounded-3xl" src={s.url}></img>
          </>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
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
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all duration-500 w-3 h-3 bg-black rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
