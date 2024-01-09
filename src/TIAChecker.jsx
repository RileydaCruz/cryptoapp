// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import animeGirlLogo from "/animegirl.png";


const TIAChecker = () => {
  const { tokenAmount } = useParams();
  const [tokenValue, setTokenValue] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const apiKey = "CG-HMPYxVNZvhP2UgL47Nroq9FX";
        //const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=celestia&vs_currencies=usd&apiKey=${apiKey}`;              

        const response = await fetch("https://api.cryptocape.com/asset/celestia/TIA").then((response)=>response.json());// fetching the data from cryptocape API

        if (response.status === true) {
          console.log(response)
          const cryptoPrice = response.data.last_price_usd;
          setTokenValue(cryptoPrice);

          // Calculate total balance in USDT
          const totalBalanceInUSDT = parseFloat(tokenAmount) * parseFloat(cryptoPrice);
          setTotalBalance(totalBalanceInUSDT);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [tokenAmount]); // Dependency on tokenAmount to recalculate when it changes

  return (
    <div>
      <img
        src={animeGirlLogo}
        className="logo"
        alt="Anime Girl Logo"
        style={{ height: "15em" }}
      />
      <h2>TIA Checker</h2>
      {tokenAmount && (
        <>
          <p>TIA Holdings: {parseFloat(tokenAmount).toFixed(4)} TIA</p>
          {tokenValue !== null && (
            <>
              <p>Current TIA Value: ${parseFloat(tokenValue).toFixed(4)}</p>
              <p>Total Balance in USDT: ${totalBalance !== null ? totalBalance.toFixed(2) : "Calculating..."}</p>
            </>
          )}
          {/* You can add more information or components based on the wallet balance */}
        </>
      )}
      <p>Thank you for using TIA Checker</p>
      <p>Powered by Cryptocape</p>
    </div>
  );
};

export default TIAChecker;


