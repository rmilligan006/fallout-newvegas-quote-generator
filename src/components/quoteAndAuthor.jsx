import { motion } from "framer-motion";

import React, { Component } from "react";

class quoteAndAuthor extends Component {
  render() {
    return (
      <div className="text-[#4cfa40] grid place-items-center h-screen">
        <div className="bg-black w-[75%] h-[50%]">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1.0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            exit={{ x: 0, opacity: 0.5, transition: { duration: 0.5 } }}
            key={Math.random()}
            className=""
          >
            <img
              src={this.props.image}
              alt={this.props.author}
              className=" px-5 flex justify-between items-center"
            />
            <div className="text-center grid place-items-center text-2xl">
              <h4 id="quote" className="py-5">
                "{this.props.quote}
              </h4>
              <h5 id="author">{this.props.author}</h5>
            </div>
          </motion.div>
          <button
            className="px-5 py-10 text-2xl"
            id="newquote"
            onClick={this.props.handleClick}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default quoteAndAuthor;
