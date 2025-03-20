import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product.jsx'

function ParamsComp() {
  // 패스 정보 취득
  // const params = useParams();
  // console.log(params);

  const { id, name = 'UNKNOWN', no = 10 } = useParams();
  const location = useLocation(); // 주소줄 정보

  const data = product.find(item => item.id === Number(id));

  const [contact, setContact] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/contacts/' + Number(no))
      .then((resp) => resp.json())
      .then(data => {
        setContact(data)
      })
      .catch(err => console.error(err))
  }, [no])

  return (
    <div className="mb-3">
      <h3>PARAMS ONE</h3>

      <div className="mb-3">
        Id: {id}<br />
        Name: {name}<br />
        No: {no}<br />
        Location: {decodeURIComponent(location.pathname)}
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
export default ParamsComp;
