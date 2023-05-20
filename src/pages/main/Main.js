import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Wallet from "../../components/Wallet";
import Switch from "../../components/Switch";
const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141e30] to-[#243b55]">
      <Wallet />
      <Switch />
      <div className="">
        <Link to="/create">
          <button>CREATE</button>
        </Link>
        <div className="w-full flex gap-6 justify-center">
          <Link
            to="/create"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <button>CREATE</button>
          </Link>
          <Link
            to="/join"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <button>JOIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
