import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import VideoCard from "./VideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res?.contents);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)] bg-black">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((items) => {
            if (items.type !== "video") return false;
            return (
              <SearchResultVideoCard
                key={items?.video?.videoId}
                video={items.video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
