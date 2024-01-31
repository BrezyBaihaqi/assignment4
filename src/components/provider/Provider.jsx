"use client";

import { Toaster } from "react-hot-toast";
import { Modal } from "../Modal";

export const Provider = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Toaster />
      <Modal />
    </>
  );
};
