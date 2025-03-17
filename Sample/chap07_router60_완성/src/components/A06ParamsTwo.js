import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product'

function ParamsComp() {
  const { '*': params } = useParams();
  const location = useLocation();
  // console.log(params);

  const arr = params.split('/');
  // console.log(arr);                // 문자열 배열

  // ajax
  const item = product.find(data => data.id === Number(arr[1] || 1001));

  return (
    <div>
      <h3>Parameter</h3>
      <br />

      <div>
        Id: {arr[1] || 1001} <br />
        Name: {arr[0] || 'UNKNOWN'}<br />
        Location: {decodeURIComponent(location.pathname)}
      </div>
      <br />

      <div>
        ID: {item && item.id}<br />
        NAME: {item?.name}<br />
        CATEGORY: {item?.category}
      </div>
    </div>
  );
};
export default ParamsComp;
