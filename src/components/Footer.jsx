import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const Footer = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div
            className={`${
                darkMode
                    ? "bg-slate-700 text-white border-slate-300"
                    : "bg-white border-slate-600"
            } p-3 border-t-2`}
        >
            <p className="text-center font-semibold">
                <span>
                    Made by{" "}
                    <a
                        href="https://github.com/CalcagnoLoic"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @calcagnoloic
                    </a>
                </span>
            </p>
        </div>
    );
};
