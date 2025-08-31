import { useState } from "react";
import '../styles/App.css';

function ApiLinkSection() {
  const [classname,setClassname] = useState("GET");
  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    const method = event.target.value;
    setClassname(method)
  }
  return (
      <div className="rounded-div">
        <form action="/submit" method="GET"  className="form">
          <select name="options" id="requst-dropdown" onChange={handleChange} className={classname}>
            <option value="GET" id="GET" >GET</option>
            <option value="POST" id="POST" >POST</option>
            <option value="PUT" id="PUT">PUT</option>
            <option value="DELETE" id="DELETE">DELETE</option>
          </select>

          <input type="url" name="requestUrl" id="request-input" placeholder="https://catfact.ninja/fact" />
          <button type="submit">SEND</button>
        </form>
      </div>
  );
}

export default ApiLinkSection;
