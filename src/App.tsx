import "./styles/App.css";
import Request from "./components/Request";
import Response from "./components/Response";
import { useState } from "react";

type Resp = {
  data: string;
  metadata :Record<string,any>
}
function App() {

  const [responseData, setResponseData] = useState<Resp>({data:"",metadata:{}});

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
        <Response data={responseData.data} metadata={responseData.metadata}/>
      </div>
    </>
  );
}

export default App;
