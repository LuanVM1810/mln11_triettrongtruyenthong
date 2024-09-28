import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Location, NavLink } from "react-router-dom";
import Logo from "../../assets/logo đen_bộ nhận diện wooden.png";

type Props = {
  location: Location;
};

const Header = ({ location }: Props) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onClickOpenMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  const onClickCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <nav className="font-vietnam fixed w-full z-10 text-black">
      <div className="text-[24px] flex items-center w-full px-4 py-4 lg:px-8 lg:py-6 lg:text-[30px]">
        <img src={Logo} width={32} className="lg:hidden" />
        <div className="mx-3 lg:hidden p-1 overflow-hidden w-[30px] h-[30px] hover:w-[75%] text-black hover:shadow-search rounded-full flex group items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center">
            <IoIosSearch size={24} />
          </div>
          <input
            type="text"
            className="outline-none text-[14px] bg-transparent w-full text-black font-normal pl-2"
          />
        </div>

        <IoMenu
          onClick={onClickOpenMobileMenu}
          className="ml-auto lg:hidden text-black"
          size={"24px"}
        />

        <div
          className={`fixed w-[100%] md:w-[50%] ${
            openMobileMenu === true
              ? "translate-x-0 shadow-2xl"
              : "translate-x-[100%]"
          } lg:hidden  top-0 right-0 bottom-0 bg-white
          transition-all duration-700 z-10 pl-8 pr-4 py-4`}
        >
          <IoCloseOutline
            onClick={onClickCloseMobileMenu}
            size={"24px"}
            className="ml-auto"
          />
          <div className="mt-[30px]">
            <ul className="flex flex-col gap-[20px] text-14 items-center">
              <NavLink to="/">
                <li
                  className={`${
                    location.pathname === "/" && `bg-[#D9D9D9]`
                  } px-6 py-2 rounded-3xl hover:opacity-80`}
                >
                  Về chúng tôi
                </li>
              </NavLink>
              <NavLink to="/ban-tin-triet">
                <li
                  className={`${
                    location.pathname === "/ban-tin-triet" && `bg-[#D9D9D9]`
                  } px-6 py-2 rounded-3xl`}
                >
                  Bản tin triết
                </li>
              </NavLink>
              <NavLink to="/ban-hoc-triet">
                <li
                  className={`${
                    location.pathname === "/ban-hoc-triet" && `bg-[#D9D9D9]`
                  } px-6 py-2 rounded-3xl`}
                >
                  Bạn học triết
                </li>
              </NavLink>
              <NavLink to="/tu-dien">
                <li
                  className={`${
                    location.pathname === "/2" && `bg-[#D9D9D9]`
                  } px-6 py-2 rounded-3xl`}
                >
                  Từ điển
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="hidden text-[14px] lg:block lg:ml-auto text-triethoc-black">
          <ul className="lg:flex lg:gap-[30px] items-center">
            <NavLink to="/">
              <li
                className={`${
                  location.pathname === "/" && `bg-[#D9D9D9]`
                } px-6 py-2 rounded-3xl hover:opacity-80`}
              >
                Về chúng tôi
              </li>
            </NavLink>
            <NavLink to="/ban-tin-triet">
              <li
                className={`${
                  location.pathname === "/ban-tin-triet" && `bg-[#D9D9D9]`
                } px-6 py-2 rounded-3xl`}
              >
                Bản tin triết
              </li>
            </NavLink>
            <NavLink to="/ban-hoc-triet">
              <li
                className={`${
                  location.pathname === "/ban-hoc-triet" && `bg-[#D9D9D9]`
                } px-6 py-2 rounded-3xl`}
              >
                Bạn học triết
              </li>
            </NavLink>
            <NavLink to="/tu-dien">
              <li
                className={`${
                  location.pathname === "/tu-dien" && `bg-[#D9D9D9]`
                } px-6 py-2 rounded-3xl`}
              >
                Từ điển
              </li>
            </NavLink>
            <li className="ml-10">
              <div className="mx-3 p-1 overflow-hidden w-[30px] h-[30px] hover:w-[200px] text-black hover:shadow-search rounded-full flex group items-center hover:duration-300 duration-300">
                <div className="flex items-center justify-center">
                  <IoIosSearch size={24} />
                </div>
                <input
                  type="text"
                  className="outline-none text-[14px] bg-transparent w-full text-black font-normal pl-2"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
