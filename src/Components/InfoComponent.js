import React from "react";
import "./Main.css";

const InfoComponent = (props) => {
  return (
    <>
      <div className="secondinfocomponent">
        <div className="subcontainer">Exchange rate :</div>
        <div className="subcontainer">{props.exchangerate}</div>
      </div>
      <div className="secondinfocomponent">
        <div className="subcontainer">From currency :</div>
        <div className="subcontainer">{props.from_currency}</div>
      </div>
      <div className="secondinfocomponent">
        <div className="subcontainer">To currency : </div>
        <div className="subcontainer">{props.to_currency}</div>
      </div>
      <div className="secondinfocomponent">
        <div className="subcontainer">Bid price :</div>
        <div className="subcontainer">{props.bidprice}</div>
      </div>
      <div className="secondinfocomponent">
        <div className="subcontainer">Ask price :</div>
        <div className="subcontainer">{props.askprice}</div>
      </div>
    </>
  );
};

export default InfoComponent;
