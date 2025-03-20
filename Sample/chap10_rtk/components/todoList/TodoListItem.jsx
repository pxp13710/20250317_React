import React, { memo } from 'react';

function TodoListItem(props) {
  return (
    <tr>
      <td></td>
      <td>
        <span></span>
      </td>
      <td>
        <button className="btn btn-primary">Complete</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
export default memo(TodoListItem);
