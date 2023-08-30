import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";

export const ModalBtn = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div
            className={`${
                darkMode
                    ? "bg-slate-700 hover:bg-slate-800"
                    : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded mx-auto mt-2 px-6 py-3 cursor-pointer text-sm relative z-0`}
        >
            Get the code
        </div>
    );
};
