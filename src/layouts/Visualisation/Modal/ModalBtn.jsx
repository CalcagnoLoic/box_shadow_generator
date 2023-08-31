import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export const ModalBtn = () => {
    const { darkMode } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                onClick={() => setShowModal(!showModal)}
                className={`${
                    darkMode
                        ? "bg-slate-700 hover:bg-slate-800"
                        : "bg-blue-600 hover:bg-blue-700"
                } text-white rounded mx-auto mt-2 px-6 py-3 cursor-pointer text-sm relative z-0`}
            >
                Get the code
            </div>

            {showModal &&
                createPortal(
                    <Modal closeModal={() => setShowModal(!showModal)} />,
                    document.body
                )}
        </>
    );
};
