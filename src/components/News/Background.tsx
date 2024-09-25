import NewsImage from "../../assets/Background trang bạn học triết.png";
const Background = () => {
  return (
    <div className="pt-10 h-screen lg:max-w-full">
      <div
        className="lg:h-[100%] h-80  bg-center bg-cover duration-500 ease-in"
        style={{
          backgroundImage: `url(${NewsImage})`,
        }}
      ></div>
    </div>
  );
};

export default Background;
