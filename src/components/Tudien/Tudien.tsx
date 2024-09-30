import { NavLink } from "react-router-dom";
import TuDienBackground from "../../assets/Từ điển triết bg.png";
import TudienTriethoc from "../../assets/tu dien triet hoc.png";
import TudienTruyenthong from "../../assets/tu dien truyen thong.png";
import { motion } from "framer-motion";
const Tudien = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TuDienBackground})` }}
      className="h-screen w-[100%] overflow-x-hidden mt-10 lg:mt-0 z-2 relative flex flex-col lg:flex-row items-center bg-contain lg:bg-top lg:bg-cover duration-500 ease-in"
    >
      <NavLink to="truyenthong">
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
          className="lg:absolute max-lg:px-8 lg:left-[300px] lg:bottom-[74px] h-[347px] w-[420px]"
        >
          <img src={TudienTriethoc} />
        </motion.div>
      </NavLink>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2.2 }}
        className="lg:absolute max-lg:px-8 lg:right-32 h-[347px] w-[420px]"
      >
        <img src={TudienTruyenthong} />
      </motion.div>
    </div>
  );
};

export default Tudien;
