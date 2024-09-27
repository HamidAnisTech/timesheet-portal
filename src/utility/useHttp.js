import { useState } from "react";
// import axios from "axios";

function useHttp() {
  let [error, setError] = useState("");
  function sendRequest(url, method, body, action) {
    fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : "",
    })
      .then((resp) => {
        if (!resp.ok) throw new Error("Something went wrong");
        action(resp.json());
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return [error, sendRequest];
}

export default useHttp;
