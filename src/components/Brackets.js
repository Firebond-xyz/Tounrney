import React from "react";
// import "./App.css";
import { Bracket } from "react-tournament-bracket";
const game2 = {
  //game  1 upper bracket
  id: "2",
  name: "Game 1",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "12",
        name: "Team vibhu",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "13",
        name: "Team thani",
      },
      score: {
        score: 0,
      },
    },
  },
};

const game5 = {
  //game  1 upper bracket
  id: "2",
  name: "Game 1",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "12",
        name: "Team vibhu",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "13",
        name: "Team thau",
      },
      score: {
        score: 0,
      },
    },
  },
};
const game3 = {
  id: "3",
  name: "Game 2",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        name: "Team gan",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        name: "Team ath",
      },
      score: {
        score: 10,
      },
    },
  },
};
const game4 = {
  id: "3",
  name: "Game 2",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gan",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
    },
  },
};
const game6Test = {
  id: "3",
  name: "game 6 with game 4 and 5",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gopi",
      },
      score: {
        score: 1,
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game4,
        sourcePool: {},
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game5,
        sourcePool: {},
      },
    },
  },
};
const game1 = {
  name: "Quatar-finals", //bracnket name
  scheduled: Number(new Date()), //time for competition
  sides: {
    home: {
      team: {
        name: "Team ashu",
      },
      score: {
        score: 2,
      },
      seed: {
        rank: 1,
        sourceGame: game2,
      },
    },
    visitor: {
      team: {
        name: "Team kand",
      },
      score: {
        score: 3,
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game3,
      },
    },
  },
};
const final = {
  id: "3",
  name: "game 6 with game 4 and 5",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gopi",
      },
      score: {
        score: 1,
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game6Test,
        sourcePool: {},
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game5,
        sourcePool: {},
      },
    },
  },
};

const Teams = [
  <Bracket game={game1} />,
   <Bracket game={game6Test} />,
   <Bracket game={final} />,
];
const Brackets = () => {
  return (
    <div class="min-h-screen min-w-fit bg-gradient-to-br from-[#141e30] to-[#243b55]">
      {Teams.map((Team, index) => (
        <div key={index}>
          <h2 className="ml-[850px] text-red-500 text-xl font-bold">
            Round {index + 1}
          </h2>
          <div className="flex justify-center items-center">
            <div className="border border-gray-500 rounded-md p-4">
              <button>{Team}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brackets;
