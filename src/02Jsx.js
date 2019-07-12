import React, { createElement } from "react";

const App = () => {
  return createElement(
    "div",
    { id: 111 },
    "this is react use createElement!",
    createElement("a", { href: "https://itcast.cn" }, 
    "传智播客")
  );
};

export default App;
