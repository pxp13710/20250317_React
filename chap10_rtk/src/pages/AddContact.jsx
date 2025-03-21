import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { addContactAction, changeContactAction } from '@stores/contactStore'
import Swal from 'sweetalert2'

function AddContact() {
  const { loading, contact, error, status } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 입력의 상태 처리
  useEffect(() => {
    if (status.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '입력 성공', icon: 'success' })
      navigate('/contactList');
    } else if (status.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '입력 실패', icon: 'error' })
      navigate('/contactList');
    }
  }, [status, navigate])

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>
  return (
    <div>
      <h3>Add Contact</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name"
            value={contact.name}
            onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel"
            value={contact.tel}
            onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address"
            value={contact.address}
            onChange={(evt) => dispatch(changeContactAction(evt.target))} />
        </div>

        <button type="submit" className="btn btn-outline-primary"
          onClick={() => dispatch(addContactAction(contact))}>ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
