import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onClickOpenMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  const onClickCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };
  console.log(openMobileMenu);
  return (
    <nav className="fixed w-full">
      <div className="bg-triethoc-brown text-[24px] flex items-center w-full px-4 py-4 lg:px-6 lg:text-[30px]">
        <div className="text-triethoc-green">Triết trong truyền thông</div>
        <IoMenu
          onClick={onClickOpenMobileMenu}
          className="ml-auto lg:hidden text-triethoc-green"
          size={"24px"}
        />

        <div
          className={`fixed w-[70%] md:w-[50%] ${
            openMobileMenu === true ? "translate-x-0" : "translate-x-[100%]"
          } lg:hidden  top-0 right-0 bottom-0 bg-white
          transition-all duration-700 z-10 pl-8 pr-4 py-4 `}
        >
          <IoCloseOutline
            onClick={onClickCloseMobileMenu}
            size={"24px"}
            className="ml-auto"
          />
        </div>
        <div className="hidden lg:block lg:ml-auto text-triethoc-green">
          <ul className="lg:flex lg:gap-[70px] items-center ">
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li className="ml-16">Tìm hiểu thêm</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
