import React from "react";

const Counter = ({ visible, personCount }) => {
  return (
    <div>
      {visible === 1 && (
        <div className="button" style={{ color: "white" }}>
          <h1>You are currently viewing: 1 random user</h1>
        </div>
      )}
      {visible !== 1 && (
        <div className="button" style={{ color: "white" }}>
          <h1>You are currently viewing: {personCount} users.</h1>
        </div>
      )}
    </div>
  );
};

export default Counter;
