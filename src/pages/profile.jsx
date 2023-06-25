import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiHistoryLine } from "react-icons/ri";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
function dashboard() {
  // const [searchtext, setsearchtext] = useState("");

  return (
    <div className="flex flex-col h-screen page-container bg-ash">
      <div className="flex items-center justify-end my-10 mr-16 text-2xl nav-container gap-x-44">
        <Link to="/dashboard">
          <button className="text-grey1">My ChitFund</button>
        </Link>
        <Link to="/public">
          <button className="text-grey1">Public ChitFunds</button>
        </Link>
        <button className="p-4 bg-white shadow-md rounded-xl">Profile</button>
        <TbLogout2 className="text-5xl" />
      </div>
      <div className="flex h-screen items-top">
        <div className="flex flex-col w-1/5 px-12 py-16 mx-12 mr-20 text-white bg-black left-menu h-5/6 font-mont rounded-3xl">
          <div className="mb-12 text-4xl font-bold ">
            <h1>ChitNet</h1>
          </div>
          <div className="flex flex-col text-xl font-bold menu-container gap-y-8">
            <button className="flex items-center gap-x-4">
              <BiUserCircle className="text-3xl" />
              <h2>Personal Details</h2>
            </button>
            <button
              className="flex items-center gap-x-4"
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
            <button className="flex items-center gap-x-4">
              <RiHistoryLine className="text-3xl" />
              <h2>Chit History</h2>
            </button>
            <button className="flex items-center gap-x-4">
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
        <div className="flex flex-col w-full">
          <form className="flex flex-col w-3/4 p-20 mx-16 text-3xl bg-white rounded-3xl gap-y-14">
            <div className="flex items-center justify-between w-3/4 gap-20">
              <label for="name">Name </label>
              <input
                type="text"
                id="name"
                className="p-4 rounded-xl"
                value="john doe"
                disabled
              ></input>
            </div>
            <div className="flex items-center justify-between w-3/4 gap-20">
              <label for="age">Age</label>
              <input
                type="number"
                id="age"
                className="p-4 rounded-xl"
                value="42"
                disabled
              ></input>
            </div>
            <div className="flex items-center justify-between w-3/4 gap-20">
              <label for="mail">E-Mail</label>
              <input
                type="email"
                id="mail"
                className="p-4 rounded-xl"
                value="john562@gmail.com"
              ></input>
            </div>
            <div className="flex items-center justify-between w-3/4 gap-20">
              <label for="score">Credit Score</label>
              <input
                type="number"
                id="score"
                className="p-4 rounded-xl"
                value="838"
                disabled
              ></input>
            </div>
          </form>
          {/* <div className="flex flex-col w-3/4 p-20 mx-16 text-3xl bg-white rounded-3xl gap-y-14">
            <div>
              <p>
                Chit ID <span>5438</span>
              </p>
            </div>
            <div className="flex justify-between w-3/4 ">
              <p>Amount</p>
              <p>25000</p>
            </div>
            <div>
              <p>Date</p>
              <p>13-12-22</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
