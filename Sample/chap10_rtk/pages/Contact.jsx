import React from 'react'

function Contact() {
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled />
        Tel: <input type="text" className="form-control" disabled />
        Address: <input type="text" className="form-control" disabled />
      </div>
      <br />
      <button className="btn btn-outline-primary">수정</button>
      <button className="btn btn-outline-primary">삭제</button>
    </div>
  )
}

export default Contact;
