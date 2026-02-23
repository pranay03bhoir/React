import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice.js";

const Tabs = () => {
  const tabs = ["photos", "gif", "videos"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => {
    return state.search.activeTab;
  });

  return (
    <div className={`flex gap-5 p-10`}>
      {tabs.map((tab, idx) => (
        <div key={idx}>
          <button
            key={idx}
            className={`${activeTab == tab ? "bg-emerald-400" : "bg-gray-500"} transition duration-100  px-5 py-2 cursor-pointer active:scale-95 uppercase font-bold rounded-md`}
            onClick={() => {
              dispatch(setActiveTabs(tab));
            }}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
