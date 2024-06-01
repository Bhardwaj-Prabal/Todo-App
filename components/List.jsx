import React from "react";

function List({ prevOrder = [] }) { // Ensure prevOrder defaults to an empty array
  return (
    <>
    <h2>TODOS</h2>
     <ul>
      {prevOrder.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
    </>
   
  );
}

export default List;
