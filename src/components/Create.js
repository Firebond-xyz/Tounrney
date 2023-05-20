import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import brackets from "../abi/bracket.json";
import Team from "./Team";

const Create = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentType, setTournamentType] = useState("");
  const [playerIds, setPlayerIds] = useState("");
  const [participantCount, setParticipantCount] = useState("");
  const [gameName, setGameName] = useState("");
  const [totalRounds, setTotalRounds] = useState("");
  const [winnerpay, setWinnerpay] = useState([]);
  const [roundWinner, setRoundWinner] = useState([]);
  const [id, setId] = useState("");

  const [nosOfTeam, setNosOfTeam] = useState(0);
  const [Cards, setCards] = useState([]);

  const [payments, setPayments] = useState([]);
  const [totalParticipants, setTotalParticipants] = useState("");
  const [payment, setPayment] = useState("");
  const [roundWinners, setRoundWinners] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const jsonData = {};
    // Perform any necessary form validation or submission logic here
    // You can access the form values using the state variables
    console.log({
      tournamentName,
      tournamentType,
      playerIds,
      participantCount,
      gameName,
      totalRounds,
      winnerpay,
      roundWinner,
      id,
    });

    try {
      navigate("/brackets", { state: jsonData });
    } catch (err) {
      console.log(err);
    }
  };

 
  function generateRandomId() {
    const timestamp = Date.now().toString(36); // Get current timestamp and convert it to base-36 string

    return timestamp;
  }

  // Example usage
  useEffect(() => {
    setId(generateRandomId());
  }, []);

  const handleSubmit = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const accounts = await provider.listAccounts();
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();

    const contract = new ethers.Contract(
      "0xdF3B919239A65047A1C0eCF40D8e8C9621A94459",
      brackets.abi,
      signer
    );
    let totalAmount = 0;
    for (let i = 0; i < winnerpay.length; i++) {
      totalAmount = totalAmount + winnerpay[i] * roundWinner[i];
    }

    const transaction = await contract.createTournament(
      [signerAddress, totalRounds, winnerpay, roundWinner, 0],
      id,
      { value: totalAmount }
    );

    const data = await provider.waitForTransaction(transaction.hash, 1);
    if (data?.status === 0) {
      console.log("status: " + data?.status + "hash: " + data?.transactionHash);
    }
  };
  const handleWinnersPayout = (e) => {
    const commaSeparatedString = e.target.value;
    const array = commaSeparatedString.split(",");
    const numArray = array.map(Number);
    setWinnerpay(numArray);
  };
  const handleWinnersNumbers = (e) => {
    const commaSeparatedString = e.target.value;
    const array = commaSeparatedString.split(",");
    const numArray = array.map(Number);
    setRoundWinner(numArray);
  };

  const handleRendering = () => {
    if (nosOfTeam & 1) {
      return;
    }
    const Items = [];
    for (let i = 0; i < nosOfTeam; i++) {
      Items.push(<Team key={i} />);
    }

    return Items;
  };

  return (
    <div className="min-h-screen min-w-fit bg-gradient-to-br from-[#141e30] to-[#243b55]">
      <h1 className="font-bold font-signature text-center text-5xl p-8 text-white mb-12">
        Tournament Bracket Generator
      </h1>
      <h3 className="font-bold font-signature text-center text-5xl p-8 text-white mb-12">
        the current Tournament Id is: <b>{id}</b>
      </h3>
      <div className="w-full flex justify-center items-center">
        <form className="" onSubmit={handleFormSubmit}>
          {/* Tournament name */}
          <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
            <label
              className="w-full text-end text-[#A9A9A9] text-lg font-medium "
              htmlFor="tournamentName"
            >
              Tournament Name:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="tournamentName"
                value={tournamentName}
                onChange={(e) => {
                  setTournamentName(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Tournament Type */}
          <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="tournamentType"
            >
              Tournament Type:{" "}
            </label>
            <select
              className="w-full h-[40px] rounded-md text-[#A9A9A9] text-lg font-normal "
              id="tournamentType"
              value={tournamentType}
              onChange={(e) => setTournamentType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="singleElimination">Single Elimination</option>
              <option value="doubleElimination">Double Elimination</option>
            </select>
          </div>

          {/* Player Ids */}
          <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="playerIds"
            >
              Player IDs:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="playerIds"
                value={playerIds}
                onChange={(e) => setPlayerIds(e.target.value)}
              />
            </div>
          </div>

          {/* Total Rounds */}
          <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="totalRounds"
            >
              Total Rounds:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="number"
                id="totalRounds"
                value={totalRounds}
                onChange={(e) => setTotalRounds(e.target.value)}
              />
            </div>
          </div>

          {/* Round Winners */}
          <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="roundWinner"
            >
              Round Winners:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="roundWinner"
                value={roundWinners}
                onChange={(e) => {
                  handleWinnersNumbers(e);
                }}
              />
            </div>
          </div>


          {/* Payment to Player */}
          <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="payment"
            >
              Payment to Players:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="payment"
                value={winnerpay}
                onChange={(e) => handleWinnersPayout(e)}
              />
            </div>
          </div>

          {/* No of participants */}
          <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
            <label
              className="text-end w-full text-[#A9A9A9] text-lg font-medium "
              htmlFor="participants"
            >
              Number of Participants:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="participants"
                value={participantCount}
                onChange={(e) => setParticipantCount(e.target.value)}
              />
            </div>
          </div>

          {/* Game Name */}
          <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
            <label
              className="w-full text-end text-[#A9A9A9] text-lg font-medium "
              htmlFor="gameName"
            >
              Game Name:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="text"
                id="gameName"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
              />
            </div>
          </div>

          {/* Nos of teams participating */}
          <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
            <label
              className="w-full text-end text-[#A9A9A9] text-lg font-medium "
              htmlFor="tournamentName"
            >
              Number Of Teams:{" "}
            </label>
            <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
              <input
                className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
                type="number"
                id="nosOfTeam"
                value={nosOfTeam}
                onChange={(e) => {
                  setNosOfTeam(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Rendering no of teams */}
          <div className="w-full flex justify-center items-center ml-20 mb-3">
            <div className="flex gap-4 max-w-[450px] overflow-auto">
              {handleRendering()}
            </div>
          </div>

          {/* Link to brackets */}
          <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
            <div className="w-full"></div>
            <div className="w-full flex ">
              <Link
                to="/brackets"
                className="w-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 "
              >
                <button type="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>

    // <form onSubmit={handleFormSubmit} className='min-h-screen bg-[#272a33]'>
    //   <div>
    //     <label htmlFor="tournamentName">Tournament Name:</label>
    //     <input
    //       type="text"
    //       id="tournamentName"
    //       value={tournamentName}
    //       onChange={(e) => setTournamentName(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="tournamentType">Tournament Type:</label>
    //     <select
    //       id="tournamentType"
    //       value={tournamentType}
    //       onChange={(e) => setTournamentType(e.target.value)}
    //     >
    //       <option value="">Select Type</option>
    //       <option value="singleElimination">Single Elimination</option>
    //       <option value="doubleElimination">Double Elimination</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label htmlFor="playerIds">Player IDs:</label>
    //     <input
    //       type="text"
    //       id="playerIds"
    //       value={playerIds}
    //       onChange={(e) => setPlayerIds(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="participantCount">Number of Participants:</label>
    //     <input
    //       type="number"
    //       id="participantCount"
    //       value={participantCount}
    //       onChange={(e) => setParticipantCount(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="gameName">Game Name:</label>
    //     <input
    //       type="text"
    //       id="gameName"
    //       value={gameName}
    //       onChange={(e) => setGameName(e.target.value)}
    //     />
    //   </div>
    //   <Link to='/brackets'>
    //   <button type="submit">Submit</button>

    //   </Link>
    // </form>
  );
};

export default Create;
