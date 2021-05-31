import React from 'react';
import ReactDOM from 'react-dom';

//unit test code
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<span></span>, div)
})