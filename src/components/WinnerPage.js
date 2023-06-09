import React from 'react'

const WinnerPage = ({ title }) => {
  const storedTransaction = localStorage.getItem("transaction");
  if (storedTransaction) {
    const transaction = JSON.parse(storedTransaction);
    title = "0x5a9c9861a9cd302ae19c36d14d3431d2b7a6b705e0f9f3e551a1fe9b17f18f61";
  }
  return (
    <div className="min-h-screen bg-black relative">
      <img src="bg.jpg" className="h-full w-full object-cover" />

      <h1 className="absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] text-7xl text-yellow-400 font-extrabold z-10">
        Congratulations
      </h1>
      <h1 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl text-yellow-400 font-extrabold z-10">
        Rohit You Are the Winner !
      </h1>

      <h1 className="absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] text-3xl text-orange-200 font-extrabold z-10">
        Transaction Id:
        0x5a9c9861a9cd302ae19c36d14d3431d2b7a6b705e0f9f3e551a1fe9b17f18f61
      </h1>
      <h1>Winner is </h1>
    </div>
  );
}

export default WinnerPage