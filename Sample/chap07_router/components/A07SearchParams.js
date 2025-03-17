/*
  Router path를 우선적으로 사용하는 이유
  1. Router 정의로 이름을 명시하므로 전달하는 정보가 명확하다
  2. 값 처리를 위한 코드의 처리가 useParams가 심플
  3. 이반적인 패스 기술의 일부로서 표현하므로 패스 자체의 의미가 알기 쉽다
*/
import React from "react";
import { product } from './data/product'

function SearchParams() {
  return (
    <div>
      <h3>SEARCHPARAMS</h3>

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
export default SearchParams;
