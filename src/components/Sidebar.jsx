import { BiUserCircle } from "react-icons/bi";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiHistoryLine } from "react-icons/ri";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-1/5 px-12 py-16 mx-12 mr-20 text-white bg-black left-menu h-5/6 font-mont rounded-3xl">
        <div className="mb-12 text-4xl font-bold ">
          <h1>ChitNet</h1>
        </div>
        <div className="flex flex-col text-xl font-bold menu-container gap-y-8">
          <button
            className="flex items-center gap-x-4"
            onClick={(e) => {
              navigate("/profile/personal-details");
            }}
          >
            <BiUserCircle className="text-3xl" />
            <h2>Personal Details</h2>
          </button>
          <button
            className="flex items-center gap-x-4"
            onClick={(e) => {
              // setChatHistory(false);
              // setDocsSubmitted(false);
              // setChatHistory(false);
              // setPaymentHistory(true);
              navigate("/profile/payment-history");
            }}
          >
            <LiaExchangeAltSolid className="text-3xl" />
            <h2>Payment History</h2>
          </button>
          <button
            className="flex items-center gap-x-4"
            onClick={(e) => {
              navigate("/profile/chit-history");
            }}
          >
            <RiHistoryLine className="text-3xl" />
            <h2>Chit History</h2>
          </button>
          <button
            className="flex items-center gap-x-4"
            onClick={(e) => {
              navigate("/profile/docs-submitted");
            }}
          >
            <IoDocumentsOutline className="text-3xl" />
            <h2>Docs Submitted</h2>
          </button>
          {/* <button className="flex items-center gap-x-4">
              <TbLogout2 className="text-3xl" />
              <h2>LogOut</h2>
            </button> */}
        </div>
        <div className="flex flex-col mt-auto text-lg font-bold gap-y-6">
          <h3>Help</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
