import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import News from "../components/News/News";

const BanTinTriet = () => {
  const location = useLocation();
  return (
    <div className="text-14 font-vietnam">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <News />
    </div>
  );
};

export default BanTinTriet;
