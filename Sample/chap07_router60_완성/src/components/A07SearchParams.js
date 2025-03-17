// npm i query-string
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { product } from './data/product'

function SearchParams() {
  // 주소줄에 ? 이후의 값을 취득. 자바스크립트 DOM API URLSearchParams 확인
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const item = product.find(data => data.id === Number(params.get('id') || 1001));

  useEffect(() => {
    // 넘어오는 정보 변경
    // setParams({ id: '1005', name: 'AAA', address: '서울' });
  }, [setParams])

  return (
    <div>
      <h3>SearchParams</h3>
      <br />

      <div>
        pathname: {decodeURIComponent(location.pathname)}<br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {decodeURIComponent(location.hash)}<br />
      </div>
      <br />

      <div>
        Name: {params.get('name')}<br />
        ID: {params.get('id')}<br />
        Address: {params.get('address')}
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
export default SearchParams;
