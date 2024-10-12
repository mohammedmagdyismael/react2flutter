/* eslint-disable react/prop-types */
import React from "react";

function Row({ id }) {
  return (
    <>
      <div key={id}>
        <div>{`Row Number ${id}`}</div>
      </div>
    </>
  )
}

export default React.memo(Row);
