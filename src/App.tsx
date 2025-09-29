import "./styles/App.css";
import Request from "./components/Request";
import Response from "./components/Response";
import { useState, useEffect } from "react";

function App() {
  const [responseData, setResponseData] = useState<string>("");
  const [theme, setTheme] = useState("dark");

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

      <header>
        <div id="icon" onClick={toggleTheme}>
            <img src={`${theme}.svg`} alt="icon" width={32} className={`rotate`}/>
        </div>
        <div id="logo">
            <img src={`logo-${theme}.svg`} alt="logo" width={150}/>
        </div>
      </header>
      

      
      <div id="container">
        <h1>Test Your APIs</h1>
        <p>
          on a much simpler UI and a nice summarized stats and performance of your
          APIs
        </p>
        <Request setRespData={setResponseData} />
        <Response data={responseData} />
      </div>
    </>
  );
}

export default App;
