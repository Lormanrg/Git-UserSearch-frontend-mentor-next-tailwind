import React from "react";

import SearchIcon from "./components/icons/SearchIcon";

const Home = () => {
  return (
    <>
      <form className=" gap-2 flex flex-wrap bg-blue-900 p-2 rounded-xl items-center">
        <span className="min-w-[20px]">
          <SearchIcon className="fill-sky-400" />
        </span>
        <input type="text" placeholder="Search Github Username" className=" flex-1 h-14 p-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus: ring-blue-500 " />
        <button className="bg-sky-400 rounded-lg py-4 px-4 text-white font-bold">Search</button>
      </form>
      <article>Todo el chamullo</article>
    </>
  );
};

export default Home;
