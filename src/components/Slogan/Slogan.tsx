import SloganImg from "../../assets/01.png";
const Slogan = () => {
  return (
    <div className="bg-triethoc-white min-h-screen lg:grid lg:grid-cols-3 text-center px-6 py-10 lg:px-12 lg:py-20">
      <div className="my-10 lg:flex-col lg:items-center lg:justify-center text-48 lg:col-span-2 uppercase">
        <div className="mt-[150px] text-triethoc-green ">
          Triết học <span className="text-triethoc-brown">trong </span> truyền
          thông
        </div>
        <button className="bg-triethoc-green outline-none hover:opacity-80 text-triethoc-white text-32 px-4 py-2 rounded-2xl">
          Bắt đầu
        </button>
      </div>
      <div className="lg:col-span-1">
        <img src={SloganImg} alt="" />
      </div>
    </div>
  );
};

export default Slogan;
