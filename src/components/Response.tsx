import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";
import "../styles/styleJson.css";
import MetaData from "./MetaData";
hljs.registerLanguage("json", json);

type Resp = {
  data: string;
  metadata :Record<string,any>
}

function Response({ data,metadata }: Resp) {
  let g = { message: "Welcome to Auston's API Tester", version: "^1.0.0" };
  if (data !== "") {
    g = JSON.parse(data);
  }

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      const formatted = JSON.stringify(g, null, 2);
      const highlighted = hljs.highlight(formatted, { language: "json" }).value;
      codeRef.current.innerHTML = highlighted; // inject HTML with colors
    }
  }, [data]);

  return (
    <div id="response">
      <div id="title-div">
        <h4>Response:</h4>
        <MetaData />
      </div>
      
      <pre >
        <code ref={codeRef} className="language-json" />
      </pre>
    </div>
  );
}

export default Response;
