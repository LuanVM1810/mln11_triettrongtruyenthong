import Logo from "../../assets/logo đen_bộ nhận diện wooden.png";
import { Location, NavLink } from "react-router-dom";

type Props = {
  location: Location;
};

const SideBar = ({ location }: Props) => {
  return (
    <div className="hidden lg:block z-10 bg-transparent border-r-2 border-[#595858/50] fixed h-screen w-[50px] lg:w-[100px] left-0 top-0 bottom-0">
      <div className="flex flex-col items-center justify-center py-4">
        <span>
          <NavLink to="/">
            <img src={Logo} width={64} />
          </NavLink>
        </span>
        <div className="flex flex-col gap-10 mt-[200px]">
          <NavLink to="/">
            <div
              className={`${
                location.pathname === "/" &&
                `outline outline-offset-4 outline-[#595858]`
              } p-1 border-4 border-[#595858] h-2 w-2 text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <NavLink to="/bantintriet">
            <div
              className={`${
                location.pathname === "/bantintriet" &&
                `outline outline-offset-4 outline-[#595858]`
              } p-1 border-4 border-[#595858] h-2 w-2 text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <NavLink to="/ban-hoc-triet">
            <div
              className={`${
                location.pathname.slice(0, 14) == "/ban-hoc-triet" &&
                `outline outline-offset-4 outline-[#595858]`
              } p-1 border-4 border-[#595858] h-2 w-2 text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <NavLink to="/tu-dien">
            <div
              className={`${
                location.pathname === "/tu-dien" &&
                `outline outline-offset-4 outline-[#595858]`
              } p-1 border-4 border-[#595858] h-2 w-2 text-black bg-black rounded-full `}
            ></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
