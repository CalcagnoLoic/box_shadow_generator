import { ToggleBtnDarkMode } from "./ToggleBtnDarkMode";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const Header = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={` ${
                darkMode
                    ? "bg-slate-700 text-white border-slate-300"
                    : "bg-white border-slate-600"
            } py-5 border-b-2 flex flex-col justify-center items-center`}
        >
            <h1 className="text-center text-2xl uppercase font-semibold">
                Box-shadow Generator
            </h1>
            <ToggleBtnDarkMode />
        </div>
    );
};
