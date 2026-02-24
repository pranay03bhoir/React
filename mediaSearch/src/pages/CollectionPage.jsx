import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard.jsx";
import { clearCollection } from "../redux/features/collectionSlice.js";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearCollections = () => {
    dispatch(clearCollection());
  };
  return (
    <div className={`overflow-auto px-10 py-6`}>
      <div className={`flex justify-between`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Your Collections</h1>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-500">
              {collection.length} Items
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            clearCollections();
          }}
          className={`active:scale-95 cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded-md`}
        >
          Clear Collection
        </button>
      </div>
      <div className="flex flex-wrap justify-start gap-2 rounded overflow-auto px-10 py-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
