function ApiLinkSection() {
  return (
    <>
      <div className="rounded-div">
        <form action="/submit" method="GET">
          <select name="options" id="requst-dropdown">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input type="url" name="requestUrl" id="request-input" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
}

export default ApiLinkSection;
