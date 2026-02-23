import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGIFs, fetchPhotos, fetchVideos } from "../api/mediaAPI.js";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice.js";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "photos") {
          const photos = await fetchPhotos(query);
          data = photos.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab === "videos") {
          const videosData = await fetchVideos(query);
          data = videosData.videos.map((item, idx) => ({
            id: item.id,
            type: "video",
            title: item.user.name || `video ${idx}`,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        } else if (activeTab === "gif") {
          const gif = await fetchGIFs(query);
          data = gif.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        } else {
          console.error("Data not found");
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-2 rounded overflow-auto p-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
