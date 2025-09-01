interface Resp {
    data: string
}

function Response({data}:Resp) {

  return (
    <>
      <div id="response">{data}</div>
    </>
  );
}

export default Response;
