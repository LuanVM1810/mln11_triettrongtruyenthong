import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Background from "../components/News/Background";

const BanHocTriet = () => {
  const location = useLocation();
  return (
    <div className="max-h-screen text-14 font-vietnam">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <Background />
    </div>
  );
};

export default BanHocTriet;
