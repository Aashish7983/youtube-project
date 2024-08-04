import React from "react";
import Button from "./Button";
export default function ButtonList() {
  const list = [
    "All",
    "Cricket",
    "Music",
    "Comedy",
    "News",
    "Cooking",
    "GFG",
    "All",
    "Cricket",
    "Music",
  ];

  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
}
