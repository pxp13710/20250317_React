/*
  Router path를 우선적으로 사용하는 이유
  1. Router 정의로 이름을 명시하므로 전달하는 정보가 명확하다
  2. 값 처리를 위한 코드의 처리가 useParams가 심플
  3. 이반적인 패스 기술의 일부로서 표현하므로 패스 자체의 의미가 알기 쉽다
*/
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { product } from './data/product.jsx'

// query 구문은 이 방식을 주로 사용
function SearchParams() {
  const { pathname, search, hash, state } = useLocation();
  const [params, setParams] = useSearchParams();
  // console.log(params)

  const data = product.find(item => item.id === Number(params.get('id')));

  const [contact, setContact] = useState({});

  useEffect(() => {
    // setParams({ id: '1001', name: 'ABC', no: 20 });
  }, [setParams])

  useEffect(() => {
    fetch('http://localhost:8000/contacts/' + Number(params.get('no')))
      .then((resp) => resp.json())
      .then(data => {
        setContact(data)
      })
      .catch(err => console.error(err))
  }, [params])

  return (
    <div>
      <h3>SEARCHPARAMS</h3>

      <div className="mb-3">
        pathname: {pathname} <br />
        search: {search} <br />
        hash: {hash}<br />
        state: {state}
      </div>

      <div className="mb-3">
        ID: {params.get('id')}<br />
        Name: {params.get('name')}<br />
        NO:{params.get('no')}
      </div>

      <div className="mb-3">
        ID: {data?.id}<br />
        NAME: {data?.name}<br />
        CATEGORY: {data?.category}
      </div>

      <div className="mb-3">
        NO: {contact?.no}<br />
        NAME: {contact?.name}<br />
        TEL: {contact?.tel}<br />
        ADDRESS: {contact?.address}
      </div>
    </div>
  );
};
export default SearchParams;
