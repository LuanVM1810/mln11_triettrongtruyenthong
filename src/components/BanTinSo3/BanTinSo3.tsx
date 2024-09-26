const BanTinSo3 = () => {
  return (
    <div className="pt-20 h-screen px-4 lg:pl-[150px]">
      <div className="flex">
        <div className=" flex gap-[100px] pl-[450px]">
          <p className="bg-triethoc-green relative p-4 text-white w-[296px] h-[188px] rounded-[20px]">
            <span className="text-triethoc-brown">NGẪU NHIÊN:</span> Là những
            yếu tố xảy ra do sự kết hợp tình cờ, không theo quy luật tất yếu.
            Ngẫu nhiên không quyết định bản chất nhưng có thể ảnh hưởng đến hình
            thức biểu hiện của tất nhiên.
            <div className="ml-[180px] mt-5">
              <button className="bg-[#F8FAE5] text-black p-2 rounded-[6px]">
                Xem ví dụ
              </button>
            </div>
          </p>
          <p className="font-harmoni flex-col w-[350px] h-[144px] text-[40px] uppercase text-triethoc-brown">
            <div>Cặp phạm trù cơ bản</div>
            <div className="text-triethoc-green">"Tất nhiên"</div>
            <div className="text-triethoc-green ml-[70px]">
              <span className="text-triethoc-brown"> và</span> "Ngẫu nhiên"
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BanTinSo3;
