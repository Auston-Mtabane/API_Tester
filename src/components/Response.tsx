import { useEffect, useRef } from "react";
import { useState } from "react";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";
import "../styles/styleJson.css";
import MetaData from "./MetaData";
hljs.registerLanguage("json", json);

function Response({ data }: { data: string }) {
  const [metadata, setMetadata] = useState<any>(null);

  let responseData = {};

  const handleMetadata = (m:any) =>{
    setMetadata(m);
  }

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      let g = (data === "") ? { message: "Welcome to Auston's API Tester", version: "^1.0.0" }: JSON.parse(data);
      handleMetadata(g.metadata);
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
        <MetaData metadata_={metadata} />
      </div>
      <pre>
        <code ref={codeRef} className="language-json" />
      </pre>
    </div>
  );
}

export default Response;
