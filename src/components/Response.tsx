interface Resp {
  data: string;
}

function Response({ data }: Resp) {
  let g = {};
  if (data != "") {
    g = JSON.parse(data);
  }
  console.log(JSON.stringify(g, null, 8));
  return (
    <>
      <div id="response">{JSON.stringify(g, null, 8)}</div>
    </>
  );
}

export default Response;
