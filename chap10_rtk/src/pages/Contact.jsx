import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { getContactAction, deleteContactAction } from '@stores/contactStore'
import { useCallback } from 'react'
import Swal from 'sweetalert2'

function Contact() {
  const { loading, contact, error, status } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { no } = useParams();

  const deleteContact = useCallback(() => {
    dispatch(deleteContactAction(no))
  }, [dispatch, no])

  // 삭제의 상태 처리
  useEffect(() => {
    if (status.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '삭제 성공', icon: 'success' })
      navigate('/contactList');
    } else if (status.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '삭제 실패', icon: 'error' })
      navigate('/contactList');
    }
  }, [status, navigate])

  useEffect(() => {
    dispatch(getContactAction(no))
  }, [dispatch, no])

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary">수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  )
}

export default Contact;
