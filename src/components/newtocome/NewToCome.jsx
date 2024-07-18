import "./newtocome.scss";
import "../../../node_modules/primeicons/primeicons.css";

import React from "react";

export const NewToCome = () => {
  return (
    <div className="newtocome">
      <h1>New Stuff Comming </h1>
      <h1>
        Soon{" "}
        <i
          className="pi pi-spin pi-spinner-dotted"
          style={{ fontSize: "3rem" }}
        ></i>
      </h1>
      <br />
      <h1>
        Connect{" "}
        <i className="pi pi-arrow-down" style={{ fontSize: "3rem" }}></i>
      </h1>
    </div>
  );
};
