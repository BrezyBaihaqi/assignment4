"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const CreateList = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [begin, setBegin] = useState("");
  const [finish, setFinish] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateBookList() {
    // API POST untuk menambahkan data
    setLoading(true);
    const res = await fetch("https://v1.appbackend.io/v1/rows/kmOtA2iYFJC4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ book_name: title, author, begin, finish }]),
    });
    const data = await res.json();
    router.refresh();
    setLoading(false);
    toast.success("berhasil menambahkan list");
    setTitle("");
    setAuthor("");
    setBegin("");
    setFinish("");
  }

  return (
    <main className="card card-compact w-96 bg-base-100 shadow-md">
      <div className="card-body items-center">
        <div className="w-80">
          <input
            type="text"
            placeholder="book name"
            className="input input-bordered input-md w-full max-w-lg card-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="ml-1 text-xs">Begin read</p>
              <input
                type="date"
                placeholder="Begin Read"
                className="input input-bordered input-xs w-full max-w-xs card-title"
                value={begin}
                onChange={(e) => setBegin(e.target.value)}
                required
              />
            </div>
            <div>
              <p className="ml-1 text-xs">Finish read</p>
              <input
                type="date"
                placeholder="Finish Read"
                className="input input-bordered input-xs w-full max-w-xs card-title"
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                required
              />
            </div>
          </div>
          <textarea
            type="text"
            placeholder="write your thought about book u've read"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs textarea-primary"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          ></textarea>
          <div className="card-actions justify-end">
            <button
              className="btn-active btn-neutral rounded-lg bg-purple-600 text-white "
              disabled={loading}
              onClick={handleCreateBookList}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
