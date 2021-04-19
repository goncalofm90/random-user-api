import React from "react";
import { Card } from "react-bootstrap";

const UserList = ({ cardData, visible }) => {
  const renderCard = (person, index) => {
    return (
      <Card key={index} style={{ widht: "18rem" }}>
        <Card.Img variant="top" src={person.picture.large} />
        <Card.Body>
          <Card.Title>
            {person.name.first}
            {person.name.last}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="wrapper">
      <div className="cards">{cardData.slice(0, visible).map(renderCard)}</div>
    </div>
  );
};

export default UserList;
