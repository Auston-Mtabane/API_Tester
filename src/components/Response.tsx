import "../styles/styleJson.css";
import {insert} from '../processJson';

interface Resp {
  data: string;
}

function Response({ data }: Resp) {
  let g = {};
  if (data != "") {
    g = JSON.parse(data);
  }
  console.log(JSON.stringify(g, null, 8));
  let str: string = `Response ${data}`;
  return (
    <>
      {/* <div id="response">
        <div id="title-div">
          <h4>Response: </h4>
          
        </div>
        {JSON.stringify(g, null, 2)}
      </div> */}
      <div id="response" dangerouslySetInnerHTML={{__html:str}}/>
      {/* {insert("for",6,"super six")} */}
    </>
  );
}

export default Response;
