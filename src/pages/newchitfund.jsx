import React from "react";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
function newchitfund() {
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");
  const [participants, setParticipants] = useState("");
  const [creditScore, setCreditScore] = useState("");
  return (
    <div className="h-screen page-container bg-ash">
      <div className="flex items-center pt-10 mb-10 mr-16 text-2xl justify-evenly nav-container gap-x-44 bg-ash">
        <Link to="/dashboard">
          <button className="text-grey1">My ChitFund</button>
        </Link>
        <Link to="/public">
          <button className="text-grey1">Public ChitFunds</button>
        </Link>
        <Link to="/bookmark">
          <button className="text-grey1">Bookmarks</button>
        </Link>
        <Link to="/newchit">
          <button className="p-4 bg-white shadow-smd rounded-xl">
            Create New Chit Fund
          </button>
        </Link>

        <Link to="/profile">
          <button className="text-grey1">Profile</button>
        </Link>

        <TbLogout2 className="text-5xl" />
      </div>
      <div className="flex justify-center pt-10 ">
        <form className="flex flex-col text-xl bg-white rounded-md shadow-md p-14 justify-evenly gap-y-10 ">
          <div className="flex items-center justify-between gap-x-8">
            <label for="amount">Pool Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-24 h-12 border-2 border-black border-solid rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between gap-x-8">
            <label for="duration">Duration (in months)</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-24 h-12 border-2 border-black border-solid rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between gap-x-8 ">
            <label for="members">Number of Members</label>
            <input
              type="number"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="w-24 h-12 border-2 border-black border-solid rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-x-8 ">
            <label for="mincredit">Minimum Credit Score</label>
            <input
              type="number"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
              className="items-center w-24 h-12 p-2 border-2 border-black border-solid rounded-lg"
            />
          </div>
          <button className="p-4 rounded-md bg-lightgreen" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default newchitfund;
