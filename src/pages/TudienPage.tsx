import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Tudien from "../components/Tudien/Tudien";

const TudienPage = () => {
  const location = useLocation();
  return (
    <div className="overflow-y-hidden">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <Tudien />
    </div>
  );
};

export default TudienPage;
