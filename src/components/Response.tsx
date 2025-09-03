import "../styles/styleJson.css";
import { strJsonToPrittyHtml} from '../processJson';

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
      <div id="response" >
        <div id="title-div">
          <h4>Response: </h4>
          
        </div>
         {/* <div id="body" dangerouslySetInnerHTML={{__html:strJsonToPrittyHtml(data)}}/> */}
         <pre>
          <code className="language-json"dangerouslySetInnerHTML={{__html:data}} />


          
         </pre>
      </div>
     
    </>
  );
}

export default Response;
