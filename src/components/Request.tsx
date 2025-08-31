import { useState } from "react";
import '../styles/App.css';

async function sendReq (url:string): Promise<void> {
  const method = "GET"
  console.log(`Sending ${method} request to ${url}`);

    try {
      const response = await fetch(url, { method });
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
}
function ApiLinkSection() {
  const [classname,setClassname] = useState("GET");
  const [url,setUrl] = useState("");
  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    const method = event.target.value;
    setClassname(method);
  }
 
  const handleSubmit = async () =>{
    sendReq(url);
  }

  
  return (
      <div className="rounded-div">
        <div className="form">
          <select name="options" id="requst-dropdown" onChange={handleChange} className={classname}>
            <option value="GET" id="GET" >GET</option>
            <option value="POST" id="POST" >POST</option>
            <option value="PUT" id="PUT">PUT</option>
            <option value="DELETE" id="DELETE">DELETE</option>
          </select>

          <input type="url" name="requestUrl" id="request-input" placeholder="https://catfact.ninja/fact" onChange={(event)=>{setUrl(event.target.value)}} />
          <button type="submit" onClick={handleSubmit}>SEND</button>
        </div>
      </div>
  );
}

export default ApiLinkSection;
