import BanTinSo1Image from "../../assets/87e09fc8-78d5-42d4-8496-6c7dba6d5143.jfif";
import RadioImage from "../../assets/Black Simple Newspaper Birthday Poster (6) 1.png";
const BanTinSo1 = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2  px-4 pt-20 lg:pl-[120px]">
      <div>
        <img src={BanTinSo1Image} alt="" />
      </div>
      <div className="space-y-5 lg:pr-[70px]">
        <div className="font-harmoni uppercase text-36 text-center my-6">
          Sự thay đổi về lượng dẫn đến sự thay đổi về chất trong truyền thông
        </div>
        <div>
          <span className="font-bold">Liên tưởng thực tế:</span> Trong giai đoạn
          ban đầu, doanh nghiệp thường tiếp cận công chúng qua một vài kênh
          truyền thông truyền thống như báo in, truyền hình, hoặc radio. Lượng
          tương tác với công chúng ở mức vừa phải và một chiều.
        </div>
        <div>
          Khi lượng kênh truyền thông phát triển, đặc biệt là với sự xuất hiện
          của các nền tảng kỹ thuật số như YouTube, TikTok, và sự tăng lên của
          số lượng người sử dụng internet, doanh nghiệp có thể tiếp cận công
          chúng đa kênh và nhận phản hồi ngay lập tức từ khách hàng. Tương tác
          không còn là một chiều mà trở thành hai chiều, nơi doanh nghiệp có thể
          đối thoại và điều chỉnh thông điệp ngay trong thời gian thực. Chất
          lượng của chiến dịch truyền thông từ đó cũng thay đổi, trở nên linh
          hoạt, cá nhân hóa và mang tính kết nối hơn.
        </div>
        <img src={RadioImage} />
      </div>
    </div>
  );
};

export default BanTinSo1;
