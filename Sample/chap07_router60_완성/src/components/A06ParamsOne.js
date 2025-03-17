import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product'

function ParamsComp() {
  // 패스 정보 취득 => useParams()
  // 주소줄 정보 => useLocation(); 
  // const params = useParams();
  // console.log(params);
  const { id, name } = useParams();
  const location = useLocation();
  // console.log(location);

  // ajax
  const item = product.find(data => data.id === Number(id));

  return (
    <div>
      <h3>Parameter</h3>
      <br />

      <div>
        Id: {id}<br />
        Name: {name}<br />
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
