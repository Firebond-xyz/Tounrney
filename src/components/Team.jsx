import React, { useState } from "react";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Score, setPlayer1Score] = useState("");
  const [player2Score, setPlayer2Score] = useState("");

  const handleFormSubmit = (e) =>{
    e.preventDefault();

  }
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-3">
      <div className="w-full h-auto">
        <form >
          <h1 className="text-[#A9A9A9] font-medium text-lg text-center mb-3">
            Enter Your Team Details
          </h1>

          {/* Team Name */}
          <div className="flex justify-between items-center gap-3 mb-3">
            <h1 className="w-full text-end text-[#A9A9A9] font-medium overflow-hidden text-ellipsis ">
              Team Name:{" "}
            </h1>
            <input
              className="w-[500px] h-[40px] rounded-md bg-slate-400 overflow-hidden text-ellipsis text-black text-base font-normal px-6 outline-none"
              type="text"
              value={teamName}
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
            />
          </div>

          {/* Player1 Name */}
          <div className="flex justify-between items-center gap-3 mb-3">
            <h1 className="w-full text-end text-[#A9A9A9] font-medium overflow-hidden text-ellipsis ">
              Player1:{" "}
            </h1>
            <input
              className="w-[500px] h-[40px] rounded-md bg-slate-400 overflow-hidden text-ellipsis text-black text-base font-normal px-6 outline-none"
              type="text"
              value={player1}
              onChange={(e) => {
                setPlayer1(e.target.value);
              }}
            />
          </div>

          {/* Player1 Score */}
          <div className="flex justify-between items-center gap-3 mb-3">
            <h1 className="w-full text-end text-[#A9A9A9] font-medium overflow-hidden text-ellipsis ">
              Player1:{" "}
            </h1>
            <input
              className="w-[500px] h-[40px] rounded-md bg-slate-400 overflow-hidden text-ellipsis text-black text-base font-normal px-6 outline-none"
              value={player1Score}
              onChange={(e) => {
                setPlayer1Score(e.target.value);
              }}
            />
          </div>

          {/* Player2 Name */}
          <div className="flex justify-between items-center gap-3 mb-3">
            <h1 className="w-full text-end text-[#A9A9A9] font-medium overflow-hidden text-ellipsis ">
              Player2:{" "}
            </h1>
            <input
              className="w-[500px] h-[40px] rounded-md bg-slate-400 overflow-hidden text-ellipsis text-black text-base font-normal px-6 outline-none"
              type="text"
              value={player2}
              onChange={(e) => {
                setPlayer2(e.target.value);
              }}
            />
          </div>

          {/* Player2 Score */}
          <div className="flex justify-between items-center gap-3 mb-3">
            <h1 className="w-full text-end text-[#A9A9A9] font-medium overflow-hidden text-ellipsis ">
              Player2 Score:{" "}
            </h1>
            <input
              className="w-[500px] h-[40px] rounded-md bg-slate-400 overflow-hidden text-ellipsis text-black text-base font-normal px-6 outline-none"
              type="text"
              value={player2Score}
              onChange={(e) => {
                setPlayer2Score(e.target.value);
              }}
            />
          </div>

          {/* Submit button */}
          <div className="w-full flex justify-center items-center">
            {/* <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              type="submit"
            >
              Submit
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Team;
