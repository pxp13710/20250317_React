import React, { useCallback, useState } from 'react'

function Currency() {
  const [data, setData] = useState({
    qty: 3,
    cost: 5,
  });

  const changeData = useCallback((evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value })
  }, [data]);

  return (
    <div className="mb-3">
      <h3>CURRENCY</h3>

      Qty: {data.qty}
      <input type="text" name="qty" className="form-control" value={data.qty} onChange={changeData} />
      Cost: {data.cost}
      <input type="text" name="cost" className="form-control" value={data.cost} onChange={changeData} />
      <br />

      <div>Total: {data.qty * data.cost}</div>
    </div>
  )
}
export default Currency;
