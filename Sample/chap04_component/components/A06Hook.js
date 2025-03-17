import React from "react";

function A06Hook() {
  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Num:
        <input type="text" name="num" className="form-control" />
      </div>

      <div className="mb-3">
        Str:
        <input type="text" name="str" className="form-control" />
      </div>

      <div className="mb-3">
        Today: <br />
      </div>

      <div className="mb-3">
        Avg:
        <div className="input-group">
          <input type="text" name="str" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
