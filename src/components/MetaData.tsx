import '../styles/metadata.css';
import { useEffect, useState } from 'react';

export default function MetaData({ metadata_ }: any) {
  const [metadata, setMetadata] = useState<any>(metadata_);

  useEffect(() => {
    setMetadata(metadata_);
  }, [metadata_]);

  console.log("Metadata in MetaData.tsx:", metadata);

  return (
    <div id="meta-data">
      <span className="http-status" id={`C${metadata?.StatusCode}`} >{metadata?.StatusCode ||+ " "} {metadata?.StatusText}</span>
      <span id="speed-section"><span id='speed'>{metadata?.RequestSpeed_ms}</span> ms</span>
      <span id="size-section"><span id='size'>{metadata?.responseDataSize_kb}</span> kb</span>
    </div>
  );
}
