import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// index >> App >> TodoList >> Todo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* コンポーネントのバグを検知したり、予期せぬ処理などを警告してくれるツール */}
    <App />
  </React.StrictMode>
);
