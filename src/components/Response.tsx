import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";
import "../styles/styleJson.css";
import MetaData from "./MetaData";
hljs.registerLanguage("json", json);

function Response({ data }: { data: string }) {
  let metadata = {};
  let responseData = {};



  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      let g = (data === "") ? { message: "Welcome to Auston's API Tester", version: "^1.0.0" }: JSON.parse(data);
      metadata = g.metadata;
      responseData = g.data;
      const formatted = JSON.stringify(responseData || g, null, 2);
      const highlighted = hljs.highlight(formatted, { language: "json" }).value;
      codeRef.current.innerHTML = highlighted;
    }
  }, [data]);

  return (
    <div id="response">
      <div id="title-div">
        <h4>Response:</h4>
        <MetaData />
      </div>

      <pre>
        <code ref={codeRef} className="language-json" />
      </pre>
    </div>
  );
}

export default Response;
