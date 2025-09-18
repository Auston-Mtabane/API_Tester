import { useState } from "react";
import '../styles/App.css';

export async function sendReq (url:string,method:string,data_:string): Promise<any> {

  console.log(`Sending ${method} request to ${url} with ${data_}`);
    let bodyData;
    let headers_ ;

    switch(method){
      case "GET":
        bodyData = undefined;
        headers_ = undefined;
        break;
      case "POST":
      case "PUT":
        bodyData = (data_ === "") ? undefined : data_;
        headers_ = { "Content-Type": "application/json" };
        break;
    }
    console.log("Body JSON:", bodyData);
    console.log(`Sending ${method} request to ${url} with ${bodyData}`);
    try {
      const startTime = performance.now();
      const response = await fetch(url, 
      { method: method,
        headers: headers_,
        body: bodyData 
      
      });
      const endTime = performance.now();
      console.log("Headers",response.headers);
      const data = await response.json();
      console.log("Response:", data);
    
      const responseDataSize = new TextEncoder().encode(JSON.stringify(data)).length/1024;
      const metadata = {"StatusCode":response.status,
        "StatusText":response.statusText,
        "RequestSpeed_ms":(endTime-startTime).toFixed(2) ,
        "responseDataSize_kb":  responseDataSize.toFixed(3)
      }
      console.log(data)



      let responseData = {"data":data,"metadata":metadata};
      console.log("Response with metadata:", responseData);
      return responseData;
      
    }
     catch (e ) {
      console.error("Error:", e);
      return {"Error: ":e}; 
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
    // const [data,metadata] = await sendReq(url,classname,body);
    const r = await sendReq(url,classname,body);
    setRespData(JSON.stringify(r));
    console.log("Response in Request.tsx:",r); 
    
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
          <textarea placeholder={`JSON here!`} name="jsonbody" id="jsonbody" onChange={(e)=>{setBody(e.target.value)}}></textarea>
          {/* <input type="text" onChange={(e)=>{setBody(e.target.value)}}/> */}
        </div>
      </div>
  );
}

export default ApiLinkSection;
