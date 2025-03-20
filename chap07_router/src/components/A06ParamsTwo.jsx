import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product.jsx'

function ParamsTwo() {
  const { '*': params } = useParams();
  const location = useLocation(); // 주소줄 정보

  // console.log(params);
  const arr = params.split('/'); // ['1003', '흥부', '3]
  const data = product.find(item => item.id === Number(arr[0] || 0))

  return (
    <div className="mb-3">
      <h3>PARAMETER TWO</h3>

      <div className="mb-3">
        Id: {arr[0] ?? 'ID가 전달되지 않았습니다'}<br />
        Name: {arr[1] ?? '이름이 전달되지 않았습니다'}<br />
        No: {arr[2] ?? 'NO가 전달되지 않았습니다'}<br />
        Location: {decodeURIComponent(location.pathname)}
      </div>

      <div className="mb-3">
        ID: {data?.id}<br />
        NAME: {data?.name}<br />
        CATEGORY: {data?.category}
      </div>
    </div>
  );
};
export default ParamsTwo;
