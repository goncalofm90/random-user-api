import React from "react";
import { Button } from "react-bootstrap";

const Menu = ({
  loading,
  visible,
  loadRandom,
  loadFemale,
  loadMale,
  loadMore,
}) => {
  return (
    <div>
      {!loading && (
        <div>
          {!loading & (!visible < 1) && (
            <div className="buttondiv">
              <Button variant="outline-light" onClick={loadRandom}>
                Random!
              </Button>
              <Button variant="outline-light" onClick={loadFemale}>
                Load Female
              </Button>
              {loadFemale && (
                <Button variant="outline-light" onClick={loadMale}>
                  Load Male
                </Button>
              )}
              {!loading & (visible !== 1) ? (
                <Button
                  data-testid="loadmore-button"
                  variant="outline-light"
                  onClick={loadMore}
                >
                  Load more
                </Button>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
