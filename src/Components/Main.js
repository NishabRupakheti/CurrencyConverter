import React from "react";
import "./Main.css";
import TableComponent from "./TableComponent";
import InfoComponent from "./InfoComponent";

const Main = () => {
  return (
    <React.Fragment>
      <h3 className="top-text">Currency Converter</h3>
      <div className="container">
        <TableComponent />
      </div>
    </React.Fragment>
  );
};

export default Main;
