import React from "react";
import { useSelector } from "react-redux";
import store from "./utils/store";
export default function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="font-bold">Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-3 ">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-3">Videos</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}
