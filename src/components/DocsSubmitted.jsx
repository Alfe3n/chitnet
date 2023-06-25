import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiHistoryLine } from "react-icons/ri";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { AiOutlineFilePdf, AiOutlineEdit } from "react-icons/ai";

const DocsSubmitted = () => {
  return (
    <>
      <div className="flex flex-col w-3/5 p-12 mx-16 text-2xl bg-white pl-28 rounded-3xl gap-y-10">
        <div className="flex justify-start gap-x-96">
          <div className="flex items-center gap-x-20">
            <AiOutlineFilePdf className="text-4xl" />
            <p>Aadhar Card</p>
          </div>

          <AiOutlineEdit className="text-3xl" />
        </div>
        <hr></hr>
        <div className="flex justify-start gap-x-96">
          <div className="flex items-center gap-x-20">
            <AiOutlineFilePdf className="text-4xl" />
            <p>Pan Card</p>
          </div>

          <AiOutlineEdit className="text-3xl" />
        </div>
        <hr></hr>
        <div className="flex justify-start gap-x-96">
          <div className="flex items-center gap-x-20">
            <AiOutlineFilePdf className="text-4xl" />
            <p>Collaterals</p>
          </div>

          <AiOutlineEdit className="text-3xl" />
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default DocsSubmitted;
