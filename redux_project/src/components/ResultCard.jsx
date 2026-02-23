import React from "react";

const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    // console.log(oldData);
    const newData = [...oldData, item];
    // console.log(newData);
    localStorage.setItem("collection", JSON.stringify(newData));
    console.log(newData);
  };

  return (
    <div className="w-[18vw] relative h-60 bg-black rounded-md overflow-hidden">
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
        className="flex justify-between items-center absolute bottom-0 h-[35%] w-full px-4 py-6 text-white"
      >
        <h2
          className={`text-sm h-16 w-full font-semibold capitalize overflow-hidden`}
        >
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className={`bg-indigo-600 text-white cursor-pointer active:scale-95 rounded-md px-3 py-2 font-medium`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
