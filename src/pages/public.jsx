import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";
import { chitdata } from "../data/chitdata";
import { useToast } from "@chakra-ui/react";
function publicChitFund() {
  const toast = useToast();

  return (
    <div className="h-full pb-20 bg-ash page-container">
      <div className="flex items-center pt-10 mb-10 mr-16 text-2xl justify-evenly nav-container gap-x-44 bg-ash">
        <Link to="/dashboard">
          <button className="text-grey1">My ChitFund</button>
        </Link>
        <Link to="/public">
          <button className="p-4 bg-white shadow-smd rounded-xl">
            Public ChitFunds
          </button>
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
          <p className="text-4xl font-medium">ChitID #6532</p>
          <div className="flex justify-between text-xl font-normal">
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
          <div className="flex gap-x-8">
            <button className="p-4 text-lg text-orange-700 rounded-md bg-lightorange">
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

export default publicChitFund;
