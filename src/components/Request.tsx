function ApiLinkSection() {
  return (
      <div className="rounded-div">
        <form action="/submit" method="GET"  className="form">
          <select name="options" id="requst-dropdown">
            <option value="GET" id="GET">GET</option>
            <option value="POST" id="POST">POST</option>
            <option value="PUT" id="PUT">PUT</option>
            <option value="DELETE" id="DELETE">DELETE</option>
          </select>

          <input type="url" name="requestUrl" id="request-input" placeholder="https://catfact.ninja/fact
" />
          <button type="submit">SEND</button>
        </form>
      </div>
  );
}

export default ApiLinkSection;
