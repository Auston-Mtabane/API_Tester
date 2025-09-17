import "./styles/App.css";
import Request from "./components/Request";
import Response from "./components/Response";
import { useState, useEffect } from "react";

function App() {
  const [responseData, setResponseData] = useState<string>("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <div id="container">
        <h1>Test Your APIs</h1>
        <p>
          on a simpler UI and a nice summarized stats and performance of your
          APIs
        </p>
        <Request setRespData={setResponseData} />
        <Response data={responseData} />
      </div>
    </>
  );
}

export default App;
