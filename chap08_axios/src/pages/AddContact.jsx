import React from "react";

function AddContact() {
  return (
    <div>
      <h3>Add Contact</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address" />
        </div>

        <button type="submit" className="btn btn-outline-primary">ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
