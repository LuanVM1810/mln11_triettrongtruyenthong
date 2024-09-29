import TuDienBackground from "../../assets/Từ điển triết bg.png";
import FlipCardSpecific from "../FlipCard/FlipCardSpecific";
import { motion } from "framer-motion";

const TuDienTruyenThong = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      style={{ backgroundImage: `url(${TuDienBackground})` }}
      className="h-screen overflow-hidden w-[100%] px-2 pt-10 z-2 relative flex flex-col lg:flex-row lg:gap-10 items-center bg-contain lg:bg-top lg:bg-cover lg:pl-[120px] duration-500 ease-in"
    >
      <FlipCardSpecific
        frontHeading1="Lý thuyết"
        specificText='"Viên đạn thần kỳ"'
        frontHeading2="(Magic Bullet Theory)"
        frontDescription=""
        backHeading=""
        backDescription="Lý thuyết này cho rằng truyền thông đại chúng tác động trực tiếp vào tâm trí công chúng, tác động tức thì và mạnh mẽ đến hành vi và thái độ của họ. Công chúng bị coi là thụ động và dễ bị ảnh hưởng."
      />
      <FlipCardSpecific
        frontHeading1="Lý thuyết"
        specificText='"Snowball Effect"'
        frontHeading2=""
        frontDescription=""
        backHeading=""
        backDescription="Mô tả quá trình mà một ý tưởng nhỏ hoặc hành động ban đầu dần trở nên lớn mạnh và có ảnh hưởng sâu rộng hơn khi lan truyền trong xã hội."
      />
      <FlipCardSpecific
        frontHeading1="Lý thuyết"
        specificText='"Phê Phán"'
        frontHeading2="(Critical Theory)"
        frontDescription=""
        backHeading=""
        backDescription="Lý thuyết phê phán nhấn mạnh việc phân tích và chỉ trích những quyền lực, cấu trúc xã hội, và tư tưởng áp đặt qua truyền thông đại chúng. Nó chỉ ra cách truyền thông củng cố sự bất bình đẳng và quyền lực của giai cấp thống trị."
      />
    </motion.div>
  );
};

export default TuDienTruyenThong;
