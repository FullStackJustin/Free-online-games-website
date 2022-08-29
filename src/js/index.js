import React from 'react';
import ReactDOM from "react-dom";
import "../styles/index.css";

import Layout from "./layout";

const renderAll = document.querySelector("#app");
const root = ReactDom.createRoot(renderAll);


root.render(<Layout />);
