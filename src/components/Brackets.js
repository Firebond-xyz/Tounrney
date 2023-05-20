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
        name: "Team thau",
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
  //players Id
  id: "1",
  name: "Quatar-finals",//bracnket name
  scheduled: Number(new Date()),//time for competition
  sides: {
    home: {
      team: {
        id: "10",
        name: "Team meu"
      },
      score: {
        score: 2
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game2,
        sourcePool: {}
      }
    },
    visitor: {
      team: {
        id: "11",
        name: "Team pau"
      },
      score: {
        score: 3
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game3,
        sourcePool: {}
      }
    }
  }
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
// function brac() {
//   let rankOne = 0;
//   let dk = [{ stage: "round 1" }];
//   const findRounds1 = dk.filter((value) => value.stage === "round 1");
//   if (findRounds1.length !== 0) {
//     rankOne = 1;
//   }
// }

const Brackets = () => {
  return <div>
  {/* <Bracket game={game1} /> */}
      <Bracket game={game6Test} />
      {/* <Bracket game={final} /> */}


  </div>;
};

export default Brackets;
