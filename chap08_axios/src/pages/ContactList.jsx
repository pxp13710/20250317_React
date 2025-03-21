import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function GetContactList() {
  const baseURL = "http://localhost:8000/contacts_long/";
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getContactList = useCallback(async (no = 1, size = 5) => {
    setLoading(true);
    try {
      const resp = await axios.get(baseURL, { params: { pageno: no, pagesize: size } });
      setContactList(resp.data);
    } catch (err) {
      // console.error(err);
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getContactList(1, 5)
  }, [getContactList])

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>
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
