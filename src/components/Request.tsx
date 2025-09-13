import { useState } from "react";
import '../styles/App.css';

async function sendReq (url:string,method:string,data_:string): Promise<any> {
  method = "GET"
  console.log(`Sending ${method} request to ${url} with ${data_}`);
    const bodyData = (data_ === "") ? undefined : data_;
    try {
      const startTime = performance.now();
      const response = await fetch(url, { method: method, body: bodyData });
      const endTime = performance.now();
      console.log('Time: ',endTime-startTime," ms")
      const data = await response.json();
      console.log("Response:", data);
      
      const metadata = {"HttpStatus":response.status,
        "RequestSpeed_ms":endTime-startTime,
      }
      return [data,metadata];
      
    } catch (error) {
      console.error("Error:", error);
      return {}; // Always return an object
    }
}
interface Resp{
  setRespData:React.Dispatch<React.SetStateAction<string>>
}
function ApiLinkSection({setRespData}:Resp) {

  const [classname,setClassname] = useState("GET");
  const [url,setUrl] = useState("");
  const [showBody,setShowBody] = useState(true);
  const [body,setBody] = useState("");

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    const method = event.target.value;

    let list:string[] = ["POST","PUT"];

    
    setClassname(method);
    setShowBody(!list.includes(String(method)));
  }
 
  const handleSubmit = async () =>{
    const [data,metadata] = await sendReq(url,classname,body);
    setRespData(JSON.stringify(data));
    console.log(metadata);
    
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
        <div className="request-body" hidden={showBody} >
          <input type="text" onChange={(e)=>{setBody(e.target.value)}}/>
        </div>
      </div>
  );
}

export default ApiLinkSection;
