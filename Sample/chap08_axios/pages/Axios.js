import React, { useState } from "react";

function Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState('');

  return (
    <div>
      <h3>Axios Test</h3>

      <div className="mb-3">
        <button>DATA LIST</button>
        <button>DATA LIST ASYNC</button>
        <button>GET</button>
        <button>ADD</button>
        <button>UPDATE</button>
        <button>DELETE</button>
      </div>

      <textarea rows="15" className="form-control"></textarea>
    </div>
  );
}
export default Axios;
