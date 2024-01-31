import React from "react";
import { CreateList } from "./CreateList";

export const Modal = () => {
  return (
    <main>
      <dialog id="createBook" className="modal">
        <div className="modal-box">
            <p>Read new book? add here</p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
              ✕
            </button>
          </form>

          <CreateList />
        </div>
      </dialog>
    </main>
  );
};
