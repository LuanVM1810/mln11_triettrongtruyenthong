import NewsImage from "../../assets/Background trang bạn học triết.png";

const Quiz = () => {
  return (
    <div className="pt h-screen lg:max-w-full">
      <div
        className="h-screen flex justify-center items-center bg-contain lg:bg-center lg:bg-cover duration-500 ease-in"
        style={{
          backgroundImage: `url(${NewsImage})`,
        }}
      >
        <div className="bg-triethoc-green max-w-[500px] mx-4 px-4 lg:px-6 py-4 lg:py-6 rounded-[20px]">
          <div className="flex justify-center">
            <p className="bg-triethoc-white px-4 py-2 mb-4 rounded-md text-black/80 font-bold">
              Cấp 1
            </p>
          </div>
          <p className="uppercase text-triethoc-brown font-bold mb-4">
            1. Chủ nghĩa Mác-Lênin gồm 3 bộ phận cấu thành đó là:
          </p>
          <ul className="text-white">
            <li className="bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer hover:opacity-70">
              a. Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học
            </li>
            <li className="bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer hover:opacity-70">
              b. Triết học, Kinh tế chính trị học và Chính trị học
            </li>
            <li className="bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer hover:opacity-70">
              c. Triết học, Kinh tế học và Chủ nghĩa xã hội khoa học
            </li>
          </ul>
          <div className="flex justify-end mb-4">
            <button className="px-6 py-2 bg-triethoc-white font-bold rounded-[13px] text-black/80">
              Tiếp
            </button>
          </div>
          <div className="text-white text-center">1 trong 10 câu hỏi</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
