import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const photos = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return photos.data;
}

export async function fetchVideos(query, per_page = 15) {
  const videos = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });

  return videos.data;
}

export async function fetchGIFs(query, limit = 20) {
  // Klipy is a drop-in for Tenor: same path and params, only domain changes
  const { data } = await axios.get("https://api.klipy.com/v2/search", {
    params: { q: query, key: KLIPY_KEY, limit },
  });
  return data;
}
