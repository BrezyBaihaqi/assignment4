"use client";

import React from "react";
import { Books } from "./Books";
import { CreateList } from "./CreateList";

export const BookList = ({ data }) => {
  return (
    <main>
      <div className="flex justify-between py-5">
        <h1 className="p-2 mt-auto font-bold text-lg text-purple-700">
          Book I Have Read
        </h1>
        <div>
          <button
            className="text-sm btn-active btn-neutral rounded-lg bg-purple-600 text-white"
            onClick={() => document.getElementById("createBook").showModal()}
          >
            add book
          </button>
        </div>
      </div>
      <div className="space-y-2 bg-base-100 rounded-md shadow-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="grid grid-cols-5 text-left align-middle font-medium bg-purple-200 text-base">
              <th>Book Name</th>
              <th>Note</th>
              <th>Begin Read</th>
              <th>Finish Read</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        {data.map((item) => {
          return <Books key={item._id} item={item} />;
        })}
      </div>
    </main>
  );
};
