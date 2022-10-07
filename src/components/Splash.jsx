import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import levelUp from "../assets/sounds/levelUp1.mp3";

const Splash = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    sound();
    navigate("/home");
  };

  const audio = new Audio(levelUp);

  function sound() {
    audio.play();
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="rounded flex items-center justify-center">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1.0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          exit={{ x: 0, opacity: 0.5, transition: { duration: 0.5 } }}
          className=""
        >
          <img src={logo} />
        </motion.div>
      </div>
      <div className="text-[#4cfa40] py-2">
        <motion.h2
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1.0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          exit={{ x: 0, opacity: 0.5, transition: { duration: 0.5 } }}
          className="text-5xl"
        >
          Quote Generator
        </motion.h2>
      </div>
      <motion.button
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1.0 }}
        transition={{ delay: 1.9, duration: 1.9 }}
        exit={{ x: 0, opacity: 0.5, transition: { duration: 0.5 } }}
        className="text-[#38E54D] px-3 py-5 text-3xl mt-10 hover:bg-[#38E54D] hover:text-black hover:duration-300 ease-in-out border border-[#38E54D]"
        onClick={() => {
          sound();
          navigate("/home");
        }}
      >
        Ring a Ding Ding...
      </motion.button>
    </div>
  );
};

export default Splash;
