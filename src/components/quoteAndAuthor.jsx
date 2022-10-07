import { motion } from "framer-motion";

import React, { Component } from "react";

class quoteAndAuthor extends Component {
  render() {
    return (
      <div className="text-[#4cfa40] grid h-screen place-items-center ">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1.0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          exit={{ x: 0, opacity: 0.5, transition: { duration: 0.5 } }}
          key={Math.random()}
          className="border-[#4cfa40] border-2 bg-[#2B7A0B] px-2 py-2"
        >
          <div className="">
            <div className="flex items-center justify-between">
              <img
                src={this.props.image}
                alt={this.props.author}
                className="p-5 w-56 "
              />
              <div className="">
                <div className=" py-24 border-[#4cfa40] border-l-2 border-b-2 bg-black">
                  <h4
                    id="quote"
                    className="max-w-24 text-sm md:text-lg px-5 py-5"
                  >
                    "{this.props.quote}"
                  </h4>
                  <h5 id="author" className="px-5 text-xl">
                    -- {this.props.author}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <button
              className="px-5 text-2xl mb-10 flex items-center justify-center border-2 border-[#A77979] bg-black hover:bg-[#E7F6F2] hover:text-black duration-300"
              id="newquote"
              onClick={this.props.handleClick}
            >
              New Quote
            </button>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default quoteAndAuthor;
