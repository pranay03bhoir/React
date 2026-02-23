import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import Tabs from "./components/Tabs.jsx";
import ResultGrid from "./components/ResultGrid.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  //===================================================
  // async function getPhotos() {                   //=
  //   const result = await fetchPhotos("cat");     //=
  //   console.log(result);                         //=
  // }                                              //=
  //                                                //=
  // async function getVideos() {                   //=
  //   const result = await fetchVideos("cat");     //=
  //   console.log(result);                         //=
  // }                                              //=
  // async function getGifs() {                     //=
  //   const result = await fetchGIFs("happy");     //=
  //   console.log(result);                         //=
  // }                                              //=
  //====================================================

  return (
    <>
      <div className="bg-black w-full min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path={`/`} element={<HomePage />} />
          <Route path={`/collection`} element={<CollectionPage />} />
        </Routes>

        {/* =============================================================== */}
        {/* <button
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
        <button
          className="border bg-amber-500 me-2 p-2 rounded-md"
          onClick={getGifs}
        >
          get GIFs
        </button> */}
        {/* =============================================================== */}
      </div>
    </>
  );
}

export default App;
