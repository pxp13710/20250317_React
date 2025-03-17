import React from "react";

function A07OuterOne(props) {
  return (
    <div className="mb-5">
      <h3>A07 Outer One</h3>

      <div className="mb-3">
        props: {props.name}
      </div>

      <div className="mb-3">
        Age:
      </div>

      <button>AGE</button>
    </div >
  );
}

export default A07OuterOne;
