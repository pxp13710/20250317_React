// npm i qs
import React from "react";
import { product } from './data/product'

function LocationComp() {

  return (
    <div>
      <h3>LOCATION</h3>

      <div className="mb-3">
        pathname: <br />
        search: <br />
        hash:
      </div>

      <div className="mb-3">
        Name: <br />
        Age: <br />
        Address:
      </div>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        CATEGORY:
      </div>
    </div>
  );
};
export default LocationComp;
