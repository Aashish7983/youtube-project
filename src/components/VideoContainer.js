import { YOUTUBE_VIDEOS_API } from "../utils/constant";

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
export default function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {" "}
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
  );
}
