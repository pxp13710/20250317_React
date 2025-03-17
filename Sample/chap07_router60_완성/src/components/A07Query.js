// npm i query-string
import React from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

import { product } from './data/product'

function QueryComp() {
  // 브라우저의 주소줄 정보 취득
  const location = useLocation();
  // console.log(location);

  // Proxy 객체(?)
  const search = queryString.parse(location.search);
  // console.log({ ...search });
  // console.log(search.address);

  const item = product.find(data => data.id === Number(search.id));

  return (
    <div>
      <h3>Query</h3>
      <br />

      <div>
        pathname: {decodeURIComponent(location.pathname)}<br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {decodeURIComponent(location.hash)}<br />
      </div>
      <br />

      <div>
        Name: {search.name}<br />
        ID: {search.id}<br />
        Address: {search.address}
      </div>
      <br />

      <div>
        ID: {item.id}<br />
        NAME: {item.name}<br />
        CATEGORY: {item.category}
      </div>
    </div>
  );
};
export default QueryComp;
