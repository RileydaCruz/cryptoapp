import { useState } from "react";
import { useNavigate } from "react-router-dom";
import animeGirlLogo from "/animegirl.png"; // Corrected the path


const HomePage = () => {
  const [tokenAmount, setTokenAmount] = useState("");

  const handleInputChange = (event) => {
     setTokenAmount(event.target.value);
     
    };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/TIAChecker/${tokenAmount}`);
    };

  return (
    <div>
      <img
        src={animeGirlLogo}
        className="logo"
        alt="Anime Girl Logo"
        style={{ height: "15em" }}
      />
      <h1> TIA Value Notifier: </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="tokenAmount">Enter The Token Amount here: </label>
        <div>
          <input
            type="text"
            id="tokenAmount"
            name="tokenAmount"
            value={tokenAmount}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              margin: "20px",
              border: "1px solid white",
              backgroundColor: "black",
              color: "white",
              width: "400px",
            }}
          />
        </div>
        <button type="submit" style={{ padding: "10px", margin: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
