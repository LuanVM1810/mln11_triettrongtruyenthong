import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

const BanTinTriet = () => {
  const location = useLocation();
  return (
    <div className="text-14 font-vietnam">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
    </div>
  );
};

export default BanTinTriet;
