import React from "react";
import './loader.css';

const MsgLoader = () => {
  return (
    <div className="flex justify-center items-center h-9 w-20 rounded-3xl bg-loading">
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
    </div>
  )
}

export default MsgLoader;