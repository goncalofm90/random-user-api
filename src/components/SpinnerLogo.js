import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerLogo = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="loading">
          <p>loading...</p>
          <Spinner style={{ marginLeft: "1em" }} animation="border" />
        </div>
      )}
    </div>
  );
};

export default SpinnerLogo;
