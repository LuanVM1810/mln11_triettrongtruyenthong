import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Slogan from "../components/Slogan/Slogan";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="text-14 font-vietnam">
      <Header location={location} />
      <SideBar location={location} />
      <Slogan />
    </div>
  );
};

export default HomePage;
