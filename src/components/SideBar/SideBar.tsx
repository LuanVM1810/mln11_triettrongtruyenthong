import { FaTwitter } from "react-icons/fa6";
import { Location, NavLink } from "react-router-dom";

type Props = {
  location: Location;
};

const SideBar = ({ location }: Props) => {
  return (
    <div className="hidden lg:block -z-1 bg-transparent border-r-2 border-[#595858/50] fixed h-screen w-[50px] lg:w-[100px] left-0 top-0 bottom-0">
      <div className="flex flex-col items-center justify-center py-6">
        <span>
          <FaTwitter size={30} />
        </span>
        <div className="flex flex-col gap-10 mt-[200px]">
          <NavLink to="/">
            <div
              className={`${
                location.pathname === "/" &&
                `outline outline-offset-8 outline-[#595858]`
              } p-1 border-8 border-[#595858]  text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <NavLink to="/ban-tin-triet">
            <div
              className={`${
                location.pathname === "/ban-tin-triet" &&
                `outline outline-offset-8 outline-[#595858]`
              } p-1 border-8 border-[#595858]  text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <NavLink to="/ban-hoc-triet">
            <div
              className={`${
                location.pathname === "/ban-hoc-triet" &&
                `outline outline-offset-8 outline-[#595858]`
              } p-1 border-8 border-[#595858]  text-black bg-black rounded-full `}
            ></div>
          </NavLink>
          <div className="p-1 border-8 border-[#595858] text-black bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
