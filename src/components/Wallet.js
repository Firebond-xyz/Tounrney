import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { ethers } from "ethers";
import React, { useState } from "react";

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
    window.ethereum.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    }).then(balance => (setUserBalance(ethers.utils.formatEther(balance) )));
  };
  const chainChangedHandler = () =>{
    window.location.reload()
  }
  window.ethereum.on("accountChanged", accountChangeHandler);

  window.ethereum.on("chainChanged",chainChangedHandler)


  return (
    <div className="Walletcard">
      <h4>{"Connect to Metamask using windows.ethereum method"}</h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div className="accountDisplay">
        <h3>Accounts: {defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};

export default Walletcaed;
