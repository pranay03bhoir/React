import React from "react";

const ResultCard = ({ item }) => {
  console.log(item.title);

  return (
    <a className="w-[18vw] relative h-60 bg-black rounded-md">
      <a href={item.url} target="_blank" className="w-full">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="absolute bottom-0 h-[35%] w-full px-4 py-6 text-white"
      >
        <h2 className="text-sm font-semibold capitalize">{item.title}</h2>
      </div>
    </a>
  );
};

export default ResultCard;
