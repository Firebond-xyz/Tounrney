import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { ethers } from "ethers";
import React, { useState } from "react";
import MetamaskBtn from "./MetamaskBtn";

const Walletcaed = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnectButtonText] = useState("Connect Metamask");
  const [userBalance, setUserBalance] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => accountChangeHandler(result[0]));
    } else {
      setErrorMessage("metamask is not installed");
    }
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount);
  };
  const getAccountBalance = (account) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })
      .then((balance) => setUserBalance(ethers.utils.formatEther(balance)));
  };
  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountChanged", accountChangeHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div className="Walletcard ">
      <div className="w-full h-20 border-b border-[#353B43] flex justify-between items-center px-6 overflow-hidden text-ellipsis">
        <h4 className="font-semibold text-center p-6 text-[#A9A9A9] text-3xl font-signature">
          {"Connect to Metamask using windows.ethereum method"}
        </h4>
        <MetamaskBtn
          onClick={connectWalletHandler}
          title={connButtonText}
        ></MetamaskBtn>
      </div>

      <div className=" mt-40 mb-20 flex justify-center items-center">
        <div>
          <div className="accountDisplay text-slate-400 font-bold text-3xl font-title mb-6 ">
            <h3>Accounts: {defaultAccount}</h3>
          </div>
          <div className="balanceDisplay text-slate-400 font-bold text-3xl font-title">
            <h3>Balance: {userBalance}</h3>
          </div>
        </div>
      </div>

      {errorMessage}
    </div>
  );
};

export default Walletcaed;
