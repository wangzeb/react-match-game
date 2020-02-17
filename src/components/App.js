/* eslint-disable react/prop-types */
import React from "react";

export default function App(props) {
  return (
    <>
      <div>{JSON.stringify(props.initialData)}</div>
    </>
  );
}
