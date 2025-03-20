// npm i qs
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs'

import { product } from './data/product.jsx'

function LocationComp() {
  const location = useLocation();
  // console.log(location)
  const search = qs.parse(location.search, { ignoreQueryPrefix: true, delimiter: '&' });
  // console.log(search)

  const data = product.find(item => item.id === Number(search.id));

  const [contact, setContact] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/contacts/' + Number(search.no))
      .then((resp) => resp.json())
      .then(data => {
        setContact(data)
      })
      .catch(err => console.error(err))
  }, [search.no])

  return (
    <div>
      <h3>LOCATION</h3>

      <div className="mb-3">
        pathname: {decodeURIComponent(location.pathname)}<br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {location.hash}
      </div>

      <div className="mb-3">
        Name: {search?.name}<br />
        ID: {search.id}<br />
        NO: {search.no}
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
export default LocationComp;
