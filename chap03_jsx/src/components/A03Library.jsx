import React, { useState } from 'react'
import $ from 'jquery'

$(document).ready(function () {
  $('#btn01').click(function () {
    const total = $('#cost').val() * $('#qty').val();
    $('#total').html('<b>' + total + '<b>');
  })
});

function A03Library() {
  const [total, setTotal] = useState('');

  const getTotal = () => {
    const result = $('#cost').val() * $('#qty').val();
    setTotal(result);
  }
  return (
    <div className="mb-3">
      <h3>A03Library</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">가격</label>
          <input type="text" id="cost" className="form-control" name="cost" />
        </div>

        <div className="mb-3">
          <label htmlFor="qty" className="form-label">수량</label>
          <input type="text" id="qty" className="form-control" name="qty" />
        </div>

        <button type="button" id="btn01" className="btn btn-outline-primary">jQuery</button>
        <button type="button" className="btn btn-outline-primary"
          onClick={getTotal}>React</button>
      </form>

      <div>
        Total jQuery: <span id="total"></span><br />
        Total React: <span>{total}</span><br />
      </div>
    </div>
  )
}

export default A03Library