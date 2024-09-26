import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

type Props = {
  backLeft: string;
  goRight: string;
};

const ChangeLocation = ({ backLeft, goRight }: Props) => {
  return (
    <div className="flex justify-between lg:justify-center lg:gap-5 py-5">
      <NavLink to={backLeft}>
        <div className="bg-[#F8FAE5] p-1 rounded-[10px] shadow-btn">
          <BiChevronLeft size={30} />
        </div>
      </NavLink>
      <NavLink to={goRight}>
        <div className="bg-[#F8FAE5] p-1 rounded-[10px] shadow-btn">
          <BiChevronRight size={30} />
        </div>
      </NavLink>
    </div>
  );
};

export default ChangeLocation;
