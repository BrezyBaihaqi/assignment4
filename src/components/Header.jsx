"use client";
import { BsSearch, BsBook } from "react-icons/bs";

export const Header = () => {
  return (
    <main className="bg-purple-200 p-2 max-w-3xl m-auto ">
      <div className="flex p-2 justify-between">
        <div>
          <BsSearch className="absolute mt-3 ml-2" />
          <input
            className="w-[300px] h-10 pl-8 rounded-md"
            type="text"
            placeholder="search books..."
          />
        </div>
        <div className="mt-auto mb-auto">
          <BsBook className="w-7 h-7" />
        </div>
      </div>
    </main>
  );
};
