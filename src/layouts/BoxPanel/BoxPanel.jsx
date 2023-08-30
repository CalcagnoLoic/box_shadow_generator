import { useSelector } from "react-redux";
import { BoxColorPicker } from "./BoxColorPicker";
import { BoxRange } from "./BoxRange";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const BoxPanel = () => {
    const boxState = useSelector((state) => state.boxProperties);
    const { darkMode } = useContext(ThemeContext);

    const boxesInputs = boxState.map((data, index) => {
        if (data.type === "range") {
            return <BoxRange key={index} inputData={data} />;
        } else {
            return <BoxColorPicker key={index} inputData={data} />;
        }
    });

    return (
        <div
            className={`${
                darkMode ? "bg-gray-200 border-gray-100" : "bg-white border-gray-400"
            } border-b-2  px-6 py-4`}
        >
            <p className="font-semibold text-lg my-2">Box properties</p>
            {boxesInputs}
        </div>
    );
};
