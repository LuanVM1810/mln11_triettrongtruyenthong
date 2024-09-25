import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Slogan from "../components/Slogan/Slogan";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="text-14 h-screen font-vietnam">
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <Slogan />
    </div>
  );
};

export default HomePage;
