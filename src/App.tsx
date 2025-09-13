import "./styles/App.css";
import Request from "./components/Request";
import MetaData from "./components/MetaData";
import Response from "./components/Response";
import { useState } from "react";

function App() {
  const [responseData, setResponseData] = useState("");

  return (
    <>
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
