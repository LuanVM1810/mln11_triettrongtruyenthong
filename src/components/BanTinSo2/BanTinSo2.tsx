import DoveImage from "../../assets/Dove.jfif";
import ChangeLocation from "../ChangeLocation/ChangeLocation";
import { motion } from "framer-motion";
const BanTinSo2 = () => {
  return (
    <div className="h-screen grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-2 lg:grid-rows-2 px-4 py-20 lg:pl-[100px]">
      <div className="lg:col-span-2 space-y-5 lg:pl-[300px] lg:pr-[150px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-[40px] text-[#E1AE52] font-harmoni"
        >
          Mỗi quan hệ qua lại và phụ thuộc lẫn nhau
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <span className="font-bold">Liên tưởng thực tế:</span> Sự phụ thuộc và
          tương tác giữa các yếu tố là không thể tránh khỏi. Ví dụ, khi ra mắt
          một sản phẩm dưỡng da trong bối cảnh phong trào bảo vệ môi trường đang
          phát triển mạnh mẽ, chiến dịch truyền thông phải điều chỉnh thông điệp
          để phù hợp với xu hướng xã hội. Ngược lại, chiến dịch thành công có
          thể thúc đẩy phong trào xã hội, khuyến khích nhiều người tham gia.
          Phản hồi từ khách hàng cũng ảnh hưởng đến chiến lược, buộc doanh
          nghiệp phải điều chỉnh để đảm bảo tính nhất quán. Qua đó, chiến dịch
          truyền thông và xu hướng xã hội luôn tương tác và phụ thuộc lẫn nhau,
          tạo ra sự phát triển hai chiều.
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-center pt-[80px]"
      >
        <img src={DoveImage} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:mr-[150px]"
      >
        <p className="bg-[#35544E] text-white px-8 py-10 rounded-[20px] shadow-search">
          <span className="font-bold">Ví dụ: </span>
          Một ví dụ thực tế về mối quan hệ phụ thuộc và tương tác lẫn nhau giữa
          truyền thông và xã hội là chiến dịch "Real Beauty" của Dove. Ban đầu,
          Dove chỉ nhắm đến việc tôn vinh vẻ đẹp tự nhiên của phụ nữ, nhưng khi
          xu hướng xã hội chuyển hướng mạnh mẽ sang phong trào body positivity
          (tích cực về cơ thể), Dove đã điều chỉnh chiến dịch của mình để hòa
          hợp với xu hướng đó. Chiến dịch đã thúc đẩy phong trào xã hội này lan
          tỏa mạnh mẽ hơn, góp phần thay đổi nhận thức của công chúng về vẻ đẹp
          đa dạng. Qua đó, chiến dịch vừa chịu tác động từ phong trào xã hội vừa
          ảnh hưởng ngược lại đến xu hướng văn hóa.
        </p>

        <ChangeLocation
          backLeft="/ban-tin-triet/1"
          goRight="/ban-tin-triet/3"
        />
      </motion.div>
    </div>
  );
};

export default BanTinSo2;
