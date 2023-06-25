import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center pt-10 mb-10 mr-16 text-2xl justify-evenly nav-container gap-x-44 bg-ash">
        <Link to="/dashboard">
          <button className="text-grey1">My ChitFund</button>
        </Link>
        <Link to="/public">
          <button className="text-grey1">Public ChitFunds</button>
        </Link>
        <button className="text-grey1">Bookmarks</button>
        <Link to="/newchit">
          <button className="text-grey1">Create New Chit Fund</button>
        </Link>

        <Link to="/profile">
          <button className="p-4 bg-white shadow-smd rounded-xl">
            Profile
          </button>
        </Link>

        <TbLogout2 className="text-5xl" />
      </div>
    </>
  );
};

export default Navbar;
