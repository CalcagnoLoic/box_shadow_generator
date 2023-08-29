import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const Footer = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div
            className={`${
                darkMode
                    ? "bg-slate-700 text-white border-slate-100"
                    : "bg-white border-slate-600"
            } p-3 border-t-2 border-slate-600`}
        >
            <p className="text-center font-semibold">
                <span className="uppercase ">All right reserved &copy; </span>
                <span>
                    - made by{" "}
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
