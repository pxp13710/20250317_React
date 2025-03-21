import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function GetContactList() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );

  const getContactList = useCallback(async (no = 1, size = 5) => {
    try {
      const resp = await axios.get(baseURL, { params: { pageno: no, pagesize: size } });
      setContactList(resp.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getContactList(1, 5)
  }, [getContactList])


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to={"/contact/" + contact.no}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
