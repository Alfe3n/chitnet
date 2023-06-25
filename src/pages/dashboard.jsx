import React from "react";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { chitdata } from "../data/chitdata";
import badge from "../assets/medal.png";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

function dashboard() {
  const [data, setData] = useState(chitdata);
  return (
    <div className="pb-20 bg-ash">
      <div className="flex items-center pt-10 mb-10 mr-16 text-2xl justify-evenly nav-container gap-x-44 bg-ash">
        <Link to="/dashboard">
          <button className="p-4 bg-white shadow-smd rounded-xl">
            My ChitFund
          </button>
        </Link>
        <Link to="/public">
          <button className="text-grey1">Public ChitFunds</button>
        </Link>
        <button className="text-grey1">Bookmarks</button>
        <Link to="/newchit">
          <button className="text-grey1">Create New Chit Fund</button>
        </Link>

        <Link to="/profile">
          <button className="text-grey1">Profile</button>
        </Link>

        <TbLogout2 className="text-5xl" />
      </div>

      <div className="flex flex-wrap gap-x-14 gap-y-14 justify-evenly">
        <div className="flex flex-col w-1/4 p-8 bg-white rounded-lg gap-y-8">
          <div className="flex justify-between mb-4">
            <p className="text-4xl">ChitID #6532</p>
            <img src={badge} alt="badge" className="w-12 h-12" />
          </div>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Reamining Months</p>
            <p>16 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          {/* <div className="flex gap-x-8">
            <button className="w-20 p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Bid
            </button>
          </div> */}
          <div className="flex gap-x-6">
            <Popup
              trigger={
                <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
                  Pay Subscription
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="flex items-center justify-center bg-white h-96 rounded-xl modal">
                  <div className="flex flex-col items-center justify-center text-xl gap-x-10 gap-y-14">
                    <p className="text-2xl">Subscription Amount: 20000</p>
                    <button
                      onClick={() => close()}
                      className="p-6 text-lg text-green-500 rounded-md bg-lightgreen h-"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="p-4 text-lg text-green-500 rounded-md bg-lightorange">
                  Bid
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="flex items-center justify-center bg-white h-96 rounded-xl modal">
                  <form className="flex flex-col items-center justify-center text-xl gap-x-10 gap-y-14">
                    <div className="flex items-center gap-10">
                      <label for="bid">Enter Your Bid Amount</label>
                      <input
                        type="number"
                        className="items-center w-24 h-12 p-2 border-2 border-black border-solid rounded-lg"
                      ></input>
                    </div>
                    <p>Bidding Stops at 11:00 pm</p>

                    <button
                      onClick={() => close()}
                      className="p-6 text-lg text-green-500 rounded-md bg-lightgreen h-"
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              )}
            </Popup>
          </div>

          {/*  */}
        </div>
        <div className="flex flex-col w-1/4 p-12 bg-white rounded-lg gap-y-8">
          <p className="text-4xl">ChitID #6532</p>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Duration</p>
            <p>20 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-8=700 rounded-md bg-lightorange">
              Bookmark
            </button>
            <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-12 bg-white rounded-lg gap-y-8">
          <p className="text-4xl">ChitID #6532</p>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Duration</p>
            <p>20 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-8=700 rounded-md bg-lightorange">
              Bookmark
            </button>
            <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-12 bg-white rounded-lg gap-y-8">
          <p className="text-4xl">ChitID #6532</p>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Duration</p>
            <p>20 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-8=700 rounded-md bg-lightorange">
              Bookmark
            </button>
            <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-16 bg-white rounded-lg gap-y-8">
          <p className="text-4xl">ChitID #6532</p>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Duration</p>
            <p>20 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-8=700 rounded-md bg-lightorange">
              Bookmark
            </button>
            <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-16 bg-white rounded-lg gap-y-8">
          <p className="text-4xl">ChitID #6532</p>
          <div className="flex justify-between text-xl">
            <p>Pool Amount</p>
            <p>20,00,000</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Duration</p>
            <p>20 Months</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>No of Participants</p>
            <p>20</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Minimum Credit Score</p>
            <p>800</p>
          </div>
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-8=700 rounded-md bg-lightorange">
              Bookmark
            </button>
            <button className="p-4 text-lg text-green-500 rounded-md bg-lightgreen">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
