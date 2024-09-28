import TuDienBackground from "../../assets/Từ điển triết bg.png";
import TudienTriethoc from "../../assets/tu dien triet hoc.png";
import TudienTruyenthong from "../../assets/tu dien truyen thong.png";
const Tudien = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TuDienBackground})` }}
      className="h-screen w-[100%] pt-2 z-[-2] relative flex flex-col lg:flex-row items-center bg-contain lg:bg-top lg:bg-cover duration-500 ease-in"
    >
      <div
        onClick={() => {
          console.log("123");
        }}
        className="lg:absolute max-lg:px-8 lg:left-[300px] lg:bottom-[74px] h-[347px] w-[420px]"
      >
        <img src={TudienTriethoc} />
      </div>
      <div className="lg:absolute max-lg:px-8 lg:right-32 h-[347px] w-[420px]">
        <img src={TudienTruyenthong} />
      </div>
    </div>
  );
};

export default Tudien;
