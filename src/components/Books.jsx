"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsPencil, BsTrash3 } from "react-icons/bs";

export const Books = ({ item }) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState(item.book_name);
  const [author, setAuthor] = useState(item.author);
  const [begin, setBegin] = useState(item.begin);
  const [finish, setFinish] = useState(item.finish);

  // API DELETE untuk menghapus data
  async function handleDelete() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/kmOtA2iYFJC4", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    const data = await res.json();
    router.refresh();
    toast.success("berhasil di hapus");
  }

  // API PUT untuk update data
  async function handleUpdate() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/kmOtA2iYFJC4", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: item._id,
        book_name: title,
        author,
        begin,
        finish,
      }),
    });
    const data = await res.json();
    router.refresh();
    setEditMode(false);
    toast.success("berhasil di update");
  }

  // Saat editMode di pilih
  if (editMode) {
    return (
      <main className="grid grid-cols-5 h-16 gap-2">
        <input
          type="text"
          placeholder="book name"
          className="input input-bordered input-xs w-full max-w-xs card-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          type="text"
          placeholder="write your thought about book u've read"
          className="textarea textarea-bordered textarea-md w-full max-w-xs textarea-primary"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        ></textarea>
        <input
          type="date"
          placeholder="Begin Read"
          className="input input-bordered input-xs w-full max-w-xs card-title"
          value={begin}
          onChange={(e) => setBegin(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Finish Read"
          className="input input-bordered input-xs w-full max-w-xs card-title"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
          required
        />
        <button
          className="btn-active btn-neutral rounded-lg bg-purple-600 text-white"
          onClick={handleUpdate}
        >
          Update
        </button>
      </main>
    );
  }
  // button delete dan edit
  return (
    <main>
      <div>
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="break-all grid grid-cols-5">
              <td className="">{item.book_name}</td>
              <td className="">{item.author}</td>
              <td className="">{item.begin}</td>
              <td className="">{item.finish}</td>
              <td className="p-1.5">
                <div className="flex flex-row gap-1 ml-2">
                  <BsTrash3
                    className="border rounded-md p-1 h-7 w-7 hover:bg-gray-100"
                    onClick={handleDelete}
                  ></BsTrash3>
                  <BsPencil
                    className="border rounded-md p-1 h-7 w-7 hover:bg-gray-100"
                    onClick={() => setEditMode(true)}
                  ></BsPencil>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
