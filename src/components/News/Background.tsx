import NewsImage from "../../assets/BG website bạn học triết .jpg";
const Background = () => {
  return (
    <div className="max-w-[1650px] lg:max-w-full pt-10 lg:pt-20">
      <div
        className="w-full h-80 lg:h-[1024px] bg-center bg-cover duration-500 ease-in"
        style={{
          backgroundImage: `url(${NewsImage})`,
        }}
      ></div>
    </div>
  );
};

export default Background;
