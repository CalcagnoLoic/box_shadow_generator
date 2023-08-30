import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../features/shadows";
import { Shadow } from "./Shadow";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const ShadowPanel = () => {
    const dispatch = useDispatch();
    const shadows = useSelector((state) => state.shadows);
    const { darkMode } = useContext(ThemeContext);

    return (
        <div>
            <div
                className={`${
                    darkMode ? "border-gray-100" : "border-gray-400"
                } flex justify-between px-6 py-4 border-b-2 `}
            >
                <p className="font-semibold text-lg my-2">Customize shadows</p>
                <button
                    className="cursor-pointer rounded bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 self-center"
                    onClick={() => dispatch(addShadow())}
                >
                    Add a shadow
                </button>
            </div>
            <ul>
                {shadows.map((shadow, index) => (
                    <Shadow
                        key={index}
                        shadowPanel={index + 1}
                        shadow={shadow}
                    />
                ))}
            </ul>
        </div>
    );
};
