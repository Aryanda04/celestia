import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-image"
      onClick={() => {
        navigate("/greeting");
      }}
    ></div>
  );
};

export default Home;
