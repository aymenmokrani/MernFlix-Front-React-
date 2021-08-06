const { useSelector } = require("react-redux");

import React from "react";

describe("redux functions", () => {
  it("stores popular movies", () => {
    function Compo() {
      const auth = useSelector((state) => state.authReducer.auth);
      expect(auth).toBe(false);
      return <div></div>;
    }
  });
});
