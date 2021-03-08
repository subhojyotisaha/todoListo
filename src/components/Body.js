import React from "react";

function Body(props) {
  return (
    <div>
      <h1>
        {props.headerMessage} {props.age}{" "}
      </h1>
    </div>
  );
}

export default Body;
