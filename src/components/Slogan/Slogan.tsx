import Img from "../../assets/01.png";
import Img1 from "../../assets/AVATA MLN.jpg";

const Slogan = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 lg:space-x-5 px-4 py-20 lg:pl-[200px] lg:py-20">
      <div>
        <img src={Img1} className="lg:w-[70%]" />
        <p className="mt-[30px] lg:mt-[50px]">
          <span className="font-bold">“Triết học trong Truyền thông”</span> giúp
          bạn bước vào hành trình khám phá mối liên hệ đầy bất ngờ này. Bên cạnh
          đó còn mang những bài kiểm tra đơn giản giúp bạn ghi nhớ kiến thức
          Triết học mở ra một cách tiếp cận sáng tạo và thú vị hơn về Triết học,
          giúp bạn hiểu sâu hơn về cách tư duy triết học được áp dụng vào các
          thông điệp truyền thông ngày nay.
        </p>
        <div className="flex justify-center">
          <button className="w-full lg:w-[50%] px-6 py-2 mt-[30px] text-white rounded-3xl lg:mt-[50px] bg-[#546D68] text-center">
            Khám phá triết
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Slogan;
