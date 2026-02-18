import "./App.css";
import { fetchPhotos, fetchVideos } from "./api/mediaAPI.js";

function App() {
  async function getPhotos() {
    const result = await fetchPhotos("cat");
    console.log(result);
  }

  async function getVideos() {
    const result = await fetchVideos("cat");
    console.log(result);
  }

  return (
    <>
      <div>
        <h1>Redux Project.</h1>
        <button
          className="border bg-amber-500 me-2 p-2 rounded-md"
          onClick={getPhotos}
        >
          get photos
        </button>
        <button
          className="border bg-amber-500 me-2 p-2 rounded-md"
          onClick={getVideos}
        >
          get videos
        </button>
      </div>
    </>
  );
}

export default App;
