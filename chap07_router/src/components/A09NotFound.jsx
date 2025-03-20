import React from "react";
import { useParams } from "react-router-dom";

function NotFound() {
  const { '*': params } = useParams();

  return (
    <div className="mb-3">
      <h5>Dear friend, this "{params}"" URL was not found</h5>
    </div>
  );
};
export default NotFound;
