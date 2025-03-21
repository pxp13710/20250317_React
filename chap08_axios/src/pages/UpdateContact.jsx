import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateContact() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );

  const { no } = useParams();
  const navigate = useNavigate();

  const getContact = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL + no);
      setContact(resp.data);
    } catch (err) {
      console.error(err);
    }
  }, [no]);

  useEffect(() => {
    getContact();
  }, [getContact])

  return (
    <div>
      <h3>Update Contact</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address" />
        </div>

        <button type="submit" className="btn btn-outline-primary">UPDATE</button>
      </form>
    </div>
  );
}
export default UpdateContact;
