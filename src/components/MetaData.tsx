import '../styles/metadata.css'
import { useState } from "react";

export default function MetaData() {
  const [status,seStatus] = useState('OK');
  return (
    <>
      <div id="meta-data">
        <span id="http-status" className="">
        {status} status
        </span>
        <span id="speed" className="">
        {678} ms
        </span>
        <span id="size" className="">
        {1025} kb
        </span>
      </div>
    </>
  );
}
