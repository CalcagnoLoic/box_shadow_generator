const tabsData = [
    {
        name: "Shadow",
        component: <ShadowPanel />,
    },
    {
        name: "BoxPanel",
        component: <BoxPanel />,
    },
];

import { useState } from "react";
import { BoxPanel } from "./BoxPanel/BoxPanel";
import { ShadowPanel } from "./ShadowPanel/ShadowPanel";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const LeftContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`${
                darkMode
                    ? "bg-gray-200 border-slate-100"
                    : "bg-white border-slate-400"
            } relative  h-[550px] w-[600px] mt-20 md:mt-10 rounded-b rounded-tr shadow-xl border-2 `}
        >
            <div className="flex absolute -translate-y-full -left-[2px] lg:-left-[1.5px]">
                {tabsData.map((obj, index) => (
                    <>
                        <button
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`${
                                darkMode
                                    ? "border-slate-100 bg-slate-600 text-slate-100"
                                    : "border-slate-400 bg-slate-50 text-slate-700"
                            } min-w-[120px] px-3 py-2 mr-3 font-semibold border-t-2 border-x-2 rounded-t focus:ring-2 focus:outline-none ring-inset focus:ring-blue-300`}
                        >
                            {obj.name}
                        </button>
                    </>
                ))}
            </div>
            <div className="">{tabsData[selectedTab].component}</div>
        </div>
    );
};
