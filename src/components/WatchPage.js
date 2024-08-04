import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

export default function WatchPage() {
  const [searcParams] = useSearchParams();
  console.log(searcParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex">
      <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searcParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div>
        
      </div>
      <LiveChat/>
    </div>
    <CommentsContainer/>
    </div>
  );
}
