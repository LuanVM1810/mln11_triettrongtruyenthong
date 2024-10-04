import Background from "../../assets/Text ban tin.png";
import Item1 from "../../assets/Black Simple Newspaper Birthday Poster (12).svg";
import Item2 from "../../assets/Black Simple Newspaper Birthday Poster (13).svg";
import Item3 from "../../assets/Black Simple Newspaper Birthday Poster (14).svg";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import "./NewBanTin.css";
import { useState } from "react";

const NewBanTin = () => {
  const [chooseImg, setImg] = useState<number | null>(null);
  const nextImg = () => {
    const isLastImg = chooseImg === 3 ? true : false;
    if (chooseImg != null) {
      setImg(isLastImg ? null : chooseImg + 1);
    }
  };

  const previousImg = () => {
    const isFirstImg = chooseImg === 1 ? true : false;
    if (chooseImg != null) {
      setImg(isFirstImg ? null : chooseImg - 1);
    }
  };
  console.log(chooseImg);
  return (
    <div className="grid grid-rows-2 pt-5 overflow-x-hidden">
      <div
        className="h-[545px] relative row-span-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {chooseImg != null ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute ml-[250px] mt-[50px] h-full"
          >
            <img
              src={
                chooseImg === 1
                  ? Item1
                  : chooseImg === 2
                  ? Item2
                  : chooseImg === 3
                  ? Item3
                  : ""
              }
            />
            <div className="flex mt-[-50px] ml-[520px] justify-center gap-[50px]">
              <FaAngleDoubleLeft
                onClick={previousImg}
                className="bg-black/50 cursor-pointer text-white p-1 rounded-full"
                size={30}
              />
              <FaAngleDoubleRight
                onClick={nextImg}
                className="bg-black/50 p-1 cursor-pointer text-white rounded-full"
                size={30}
              />
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
      {chooseImg === null ? (
        <div className="slider" style={{ width: "1000px", height: "400px" }}>
          <div className="list">
            <div
              className="item"
              onClick={() => setImg(1)}
              style={{ animationDelay: "0s" }}
            >
              <img src={Item1} alt="" />
            </div>
            <div
              className="item"
              onClick={() => setImg(2)}
              style={{ animationDelay: "4s" }}
            >
              <img src={Item2} alt="" />
            </div>
            <div
              onClick={() => setImg(3)}
              className="item"
              style={{ animationDelay: "8s" }}
            >
              <img src={Item3} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewBanTin;
