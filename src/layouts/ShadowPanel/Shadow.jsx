import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import chevron from "../../assets/chevron.svg";
import { ShadowCheckbox } from "./ShadowCheckbox";
import { removeShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";
import { ShadowRange } from "./ShadowRange";
import { ShadowColorPicker } from "./ShadowColorPicker";

export const Shadow = ({ shadowPanel, shadow }) => {
    const dispatch = useDispatch();
    const { darkMode } = useContext(ThemeContext);
    const [toggleBtn, setToggleBtn] = useState(false);

    useEffect(() => {
        if (shadowPanel === 1) {
            setToggleBtn(true);
        }
    }, []);

    const boxesInputs = shadow.inputs.map((input, index) => {
        if (input.type === "range") {
            return (
                <ShadowRange
                    key={index}
                    inputData={shadow.inputs[index]}
                    shadowID={shadow.id}
                />
            );
        } else if (input.type === "color") {
            return (
                <ShadowColorPicker
                    key={index}
                    inputData={shadow.inputs[index]}
                    shadowID={shadow.id}
                />
            );
        }
    });

    return (
        <li
            className={`${
                darkMode ? "border-gray-100" : "border-gray-400 "
            } border-b-2`}
        >
            <button
                onClick={() => setToggleBtn(!toggleBtn)}
                className="flex w-full px-6 py-4 justify-between items-center cursor-pointer hover:bg-gray-100"
            >
                <p>Shadow {shadowPanel}</p>
                <img
                    style={{
                        transform: `${
                            toggleBtn ? "rotate(90deg)" : "rotate(0deg)"
                        }`,
                    }}
                    src={chevron}
                    alt="toggle the button panel"
                    className="w-5 self-center"
                />
            </button>

            {toggleBtn && (
                <>
                    <div className="flex justify-between px-6 py-1">
                        <div className="flex">
                            <ShadowCheckbox />
                            <ShadowCheckbox />
                        </div>
                        <button
                            onClick={() => dispatch(removeShadow())}
                            className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-1 text-white self-center rounded"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="px-6 py-4">{boxesInputs}</div>
                </>
            )}
        </li>
    );
};
