import React from "react";

const Loader = () => {
  return (
    <div className="w-[50%] flex items-center justify-center absolute top-0  bottom-0">
      <img src={require("../assets/images/Loading1.gif")} alt="loading..." />
    </div>
  );
};

export default Loader;
