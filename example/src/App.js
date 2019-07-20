import React, { Component } from "react";

import ExampleComponent from "react-scroll-to-first-error";

import React, { useRef } from "react";
import useScrollToError from "react-scroll-to-error";

export default function App() {
  const formEl = useRef(null);

  useScrollToError(formEl);

  return (
    <div>
      <form ref={formEl} noValidate>
        <input type="text" name="name" id="name" required />
        <input type="text" name="phone" id="name" />
        {/* we force height here for testing purposes */}
        <div style={{ height: "100vh" }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
