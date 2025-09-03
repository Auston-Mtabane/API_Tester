import "../styles/styleJson.css";
import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("json", json);

interface Resp {
  data: string;
}

function Response({ data }: Resp) {
  let g = {};
  if (data != "") {
    g = JSON.parse(data);
  }
  console.log(JSON.stringify(g, null, 2));

  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [g]);

  return (
    <>
      <div id="response">
        <div id="title-div">
          <h4>Response: </h4>
        </div>
        {/* <div id="body" dangerouslySetInnerHTML={{__html:strJsonToPrittyHtml(data)}}/> */}
        <pre>
          <code ref={codeRef} className="language-json">{JSON.stringify(g,null,2)}</code>
        </pre>
      </div>
    </>
  );
}

export default Response;
