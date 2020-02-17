/* eslint-disable react/prop-types */
import React from "react";

export default function App(props) {
  const state = {
    initialData: props.initialData
  };
  return <div>{state.initialData}</div>;
}
