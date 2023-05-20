import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentType, setTournamentType] = useState('');
  const [playerIds, setPlayerIds] = useState('');
  const [participantCount, setParticipantCount] = useState('');
  const [gameName, setGameName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation or submission logic here
    // You can access the form values using the state variables
    console.log({
      tournamentName,
      tournamentType,
      playerIds,
      participantCount,
      gameName,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="tournamentName">Tournament Name:</label>
        <input
          type="text"
          id="tournamentName"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tournamentType">Tournament Type:</label>
        <select
          id="tournamentType"
          value={tournamentType}
          onChange={(e) => setTournamentType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="singleElimination">Single Elimination</option>
          <option value="doubleElimination">Double Elimination</option>
        </select>
      </div>
      <div>
        <label htmlFor="playerIds">Player IDs:</label>
        <input
          type="text"
          id="playerIds"
          value={playerIds}
          onChange={(e) => setPlayerIds(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="participantCount">Number of Participants:</label>
        <input
          type="number"
          id="participantCount"
          value={participantCount}
          onChange={(e) => setParticipantCount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gameName">Game Name:</label>
        <input
          type="text"
          id="gameName"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </div>
      <Link to='/brackets'>
      <button type="submit">Submit</button>
      
      </Link>
    </form>
  );
};

export default Create 
