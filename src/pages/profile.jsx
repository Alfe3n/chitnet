import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiHistoryLine } from "react-icons/ri";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
function dashboard() {
  // const [searchtext, setsearchtext] = useState("");
  const [personalDetails, setPersonalDetails] = useState(true);
  const [paymentHistory, setPaymentHistory] = useState(false);
  const [chatHistory, setChatHistory] = useState(false);
  const [DocsSubmitted, setDocsSubmitted] = useState(false);

  return (
    <div className="page-container flex h-screen bg-ash flex-col">
      <div className="nav-container flex justify-end text-2xl my-10 items-center gap-x-44 mr-16">
        <Link to="/dashboard">
          <button className="text-grey1">My ChitFund</button>
        </Link>
        <Link to="/public">
          <button className="text-grey1">Public ChitFunds</button>
        </Link>
        <button className="bg-white p-4 rounded-xl shadow-lg">Profile</button>
        <TbLogout2 className="text-5xl" />
      </div>
      <div className="flex h-screen items-top">
        <div className="left-menu bg-black text-white flex flex-col h-5/6 mx-12  px-12 font-mont rounded-3xl mr-0 py-16 w-1/5">
          <div className="font-bold text-4xl mb-12 ">
            <h1>ChitNet</h1>
          </div>
          <div className="menu-container flex flex-col text-xl font-bold gap-y-8">
            <button className="flex gap-x-4 items-center">
              <BiUserCircle className="text-3xl" />
              <h2>Personal Details</h2>
            </button>
            <button
              className="flex gap-x-4 items-center"
              onClick={(e) => {
                setChatHistory(false);
                setDocsSubmitted(false);
                setChatHistory(false);
                setPaymentHistory(true);
              }}
            >
              <LiaExchangeAltSolid className="text-3xl" />
              <h2>Payment History</h2>
            </button>
            <button className="flex gap-x-4 items-center">
              <RiHistoryLine className="text-3xl" />
              <h2>Chit History</h2>
            </button>
            <button className="flex gap-x-4 items-center">
              <IoDocumentsOutline className="text-3xl" />
              <h2>Docs Submitted</h2>
            </button>
            {/* <button className="flex gap-x-4 items-center">
              <TbLogout2 className="text-3xl" />
              <h2>LogOut</h2>
            </button> */}
          </div>
          <div className="mt-auto flex flex-col gap-y-6 font-bold text-lg">
            <h3>Help</h3>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col bg-white mx-16 p-10 rounded-3xl text-3xl gap-y-14">
            <div className="flex justify-start gap-20 items-center">
              <label for="name">Name :</label>
              <input
                type="text"
                id="name"
                className="p-4 rounded-xl"
                value="john doe"
                disabled
              ></input>
            </div>
            <div>
              <label for="age">Age</label>
              <input
                type="number"
                id="age"
                className=""
                value="42"
                disabled
              ></input>
            </div>
            <div>
              <label for="age">Age</label>
              <input
                type="number"
                id="age"
                className=""
                value="42"
                disabled
              ></input>
            </div>
            <div>
              <label for="score">Credit Score</label>
              <input
                type="number"
                id="score"
                className=""
                value="838"
                disabled
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
