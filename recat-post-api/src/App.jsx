import "./App.css";
import api from "./api/api.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    api.post("/posts", newPost).then((response) => {
      console.log("New post added: ", response);
      setData([response.data, ...data]);
    });
  };

  return (
    <>
      <div>
        <h1>API's in React</h1>
        <form onSubmit={handleSubmit}>
          <button type={`submit`}>Add Post</button>
        </form>
      </div>
    </>
  );
}

export default App;
