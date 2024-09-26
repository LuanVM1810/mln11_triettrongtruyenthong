import { useNavigate } from "react-router-dom";
import Img from "../../assets/01.png";
import Img1 from "../../assets/TYPO.png";
import { motion } from "framer-motion";

const Slogan = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 lg:space-x-5 px-4 pt-20 lg:pl-[200px]">
      <div className="lg:col-span-2 lg:row-start-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img src={Img1} className="lg:w-[65%]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <span className="font-bold">“Triết học trong Truyền thông”</span> giúp
          bạn bước vào hành trình khám phá mối liên hệ đầy bất ngờ này. Bên cạnh
          đó còn mang những bài kiểm tra đơn giản giúp bạn ghi nhớ kiến thức
          Triết học mở ra một cách tiếp cận sáng tạo và thú vị hơn về Triết học,
          giúp bạn hiểu sâu hơn về cách tư duy triết học được áp dụng vào các
          thông điệp truyền thông ngày nay.
        </motion.div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/ban-tin-triet");
            }}
            className="w-full lg:w-[50%] px-6 py-2 mt-[30px] text-white rounded-3xl lg:mt-[50px] bg-[#546D68] text-center"
          >
            Khám phá triết
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="lg:col-span-2 lg:row-span-2"
      >
        <img src={Img} alt="" />
      </motion.div>
    </div>
  );
};

export default Slogan;
