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

export const LeftContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className="relative bg-white h-[550px] w-[600px] mt-20 md:mt-10 rounded-b rounded-tr shadow-xl border-2 border-slate-400">
            <div className="flex absolute -translate-y-full -left-[1.5px]">
                {tabsData.map((obj, index) => (
                    <>
                        <button
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className="min-w-[120px] px-3 py-2 mr-3 font-semibold border-t-2 border-x-2 border-slate-400 rounded-t bg-slate-50 text-slate-700 focus:ring-2 focus:outline-none ring-inset focus:ring-blue-300"
                        >
                            {obj.name}
                        </button>
                    </>
                ))}
                <div className="absolute mt-20 ml-10">{tabsData[selectedTab].component}</div>
            </div>
        </div>
    );
};
