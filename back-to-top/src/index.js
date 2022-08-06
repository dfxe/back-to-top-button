import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BackToTop from "./BackToTop";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Back to top button in Reactjs demo</h1>
    <h4>1. Change screen size to lesser than 1024px</h4>
    <h4>2. Scroll down</h4>

    <div style={{ backgroundColor: "#d18462" }}>Top</div>
    {new Array(100).fill(0).map((item, i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        &nbsp;&#9660;
      </div>
    ))}
    <div style={{ backgroundColor: "#d18462" }}>Bottom</div>

    {/*Pass screen size prop in pixels (number) here*/}
    <BackToTop yLimit={250} screenSizeToDisplay={1024} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
