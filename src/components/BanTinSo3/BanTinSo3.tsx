import BanTinSo3Img from "../../assets/ban tin so 3.png";
import ChangeLocation from "../ChangeLocation/ChangeLocation";
import FlipCard from "../FlipCard/FlipCard";
import { motion } from "framer-motion";
const BanTinSo3 = () => {
  return (
    <div className="pt-20 lg:pt-[100px] overflow-x-hidden lg:overflow-hidden lg:grid lg:grid-cols-2 lg:grid-row-2 lg:space-x-20 h-screen px-4 lg:pr-[200px]  lg:pl-[250px]">
      <div className="lg:col-span-1">
        <motion.div
          initial={{ x: -500 }} // Vị trí ban đầu bên trái ngoài màn hình
          animate={{ x: 0 }} // Vị trí cuối cùng
          transition={{ duration: 1 }}
          className="text-[40px] font-harmoni uppercase text-triethoc-brown"
        >
          Cặp phạm trù cơ bản
          <span className="text-triethoc-green"> "tất nhiên" </span>và{" "}
          <span className="text-triethoc-green">"ngẫu nhiên"</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={BanTinSo3Img} alt="" />
        </motion.div>
      </div>
      <div className="lg:col-start-2">
        <motion.div
          initial={{ x: 500 }} // Vị trí ban đầu bên trái ngoài màn hình
          animate={{ x: 0 }} // Vị trí cuối cùng
          transition={{ duration: 1 }}
        >
          <FlipCard
            key={1}
            frontHeading="Ngẫu nhiên"
            frontDescription=" Là những yếu tố xảy ra do sự kết hợp tình cờ, không theo quy luật tất yếu. Ngẫu nhiên không quyết định bản chất nhưng có thể ảnh hưởng đến hình thức biểu hiện của tất nhiên."
            backHeading="Ví dụ"
            backDescription="Khi tổ chức một buổi ra mắt sản phẩm mới, việc lên kế hoạch chi tiết về thời gian, nội dung phát biểu, âm thanh, ánh sáng, và bố trí không gian là điều tất nhiên phải làm. Không có kế hoạch chu đáo, sự kiện dễ dàng rơi vào hỗn loạn."
          />
        </motion.div>
        <motion.div
          initial={{ x: 500 }} // Vị trí ban đầu bên trái ngoài màn hình
          animate={{ x: 0 }} // Vị trí cuối cùng
          transition={{ duration: 1 }}
        >
          <FlipCard
            key={2}
            frontHeading="Tất nhiên"
            frontDescription="Là những yếu tố hoặc hiện tượng xuất hiện do các quy luật tất yếu của hiện thực, không thể tránh khỏi khi có đủ điều kiện. Nó quyết định xu hướng và bản chất của sự vật.
"
            backHeading="Ví dụ"
            backDescription="Trong buổi ra mắt sản phẩm, có thể một khách mời VIP hoặc Host không đến kịp giờ do vấn đề giao thông, đây là yếu tố ngẫu nhiên. Nếu không chuẩn bị phương án dự phòng cho trường hợp này, chương trình có thể bị trễ và gây ra những ảnh hưởng tiêu cực cho sự kiện."
          />
        </motion.div>
        <ChangeLocation backLeft="/ban-tin-triet/2" goRight="/" />
      </div>
    </div>
  );
};

export default BanTinSo3;
