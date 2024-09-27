import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Quiz from "../components/Quiz/Quiz";

const BanHocTriet = () => {
  const location = useLocation();
  return (
    <div className="max-h-screen text-14 font-vietnam">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <Quiz />
    </div>
  );
};

export default BanHocTriet;
