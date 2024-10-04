import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SideBar from "../components/SideBar/SideBar";
import NewBanTin from "../components/NewBanTin/NewBanTin";

const NewBanTinTriet = () => {
  const location = useLocation();
  return (
    <div>
      <ScrollToTop />
      <Header location={location} />
      <SideBar location={location} />
      <NewBanTin />
    </div>
  );
};

export default NewBanTinTriet;
