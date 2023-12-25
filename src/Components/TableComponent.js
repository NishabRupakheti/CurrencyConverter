import React, {  useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import InfoComponent from "./InfoComponent";

function TableComponent() {
  const [primaryvaluehold, setprimaryValuehold] = useState(1);
  const [secondaryvaluehold, setSecondaryvaluehold] = useState();
  const [fromcurrency , setfromcurrency] = useState('')
  const [tocurrency , settocurrency] = useState('')
  const [bidprice, setBidprice] = useState(0)
  const [askprice, setAskprice] = useState(0)
  const [primaryCurrency, setprimarycurrency] = useState("USD");
  const [secondaryCurrency, setsecondarycurrency] = useState("USD");
  const [exchangerate , setexchangerate] = useState(1)

  const currencies = ["USD", "EUR", "GBP", "CHF", "KWD", "INR", "NPR"];


  const fetchdata = async ()=>{

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        to_currency: secondaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        from_currency: primaryCurrency
      },
      headers: {
        'X-RapidAPI-Key': '73918fb350mshaf79356cbee72b9p11ee84jsn42d2f144a22d',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSecondaryvaluehold(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * primaryvaluehold)
      setBidprice(response.data['Realtime Currency Exchange Rate']['8. Bid Price'])
      setAskprice(response.data['Realtime Currency Exchange Rate']['9. Ask Price'])
      setfromcurrency(response.data['Realtime Currency Exchange Rate']['2. From_Currency Name'])
      settocurrency(response.data['Realtime Currency Exchange Rate']['4. To_Currency Name'])
      setexchangerate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])

      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <div className="main-container">
        <table className="table">
          <tbody>
            <tr className="row">
              <td>Enter Primary Currency:</td>
              <td>
                <input
                  type="number"
                  className="valuePlaceholder"
                  value={primaryvaluehold}
                  onChange={(e) => {
                    if (e.target.value >= 0) {
                      setprimaryValuehold(e.target.value);
                    }
                  }}
                />
              </td>
              <td>
                <select
                  className="select-items"
                  value={primaryCurrency}
                  onChange={(event) => setprimarycurrency(event.target.value)}
                >
                  {currencies.map((curr) => {
                    return <option key={curr} >{curr}</option>;
                  })}
                </select>
              </td>
            </tr>
            <tr className="row">
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  className="valuePlaceholder"
                  value={secondaryvaluehold}
                  disabled= {true}
                />
              </td>
              <td>
                <select
                  className="select-items"
                  value={secondaryCurrency}
                  onChange={(event) => setsecondarycurrency(event.target.value)}
                >
                  {currencies.map((curr) => {
                    return <option key={curr} >{curr}</option>;
                  })}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="second-part">
          <button className="btn" onClick={fetchdata} >Convert</button>
        </div>
      </div>
      <InfoComponent bidprice = {bidprice} askprice={askprice} from_currency = {fromcurrency} to_currency = {tocurrency} exchangerate = {exchangerate} />
      <footer>
        . <br/>
      </footer>
    </React.Fragment>
  );
}

export default TableComponent;
