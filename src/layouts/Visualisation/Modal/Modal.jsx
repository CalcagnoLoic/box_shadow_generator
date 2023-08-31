import { getBoxShadowValues } from "../../../utils/getBoxShadowValues";
import { FaCss3Alt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Modal = ({ closeModal }) => {
    const values = useSelector((state) => state.shadows);

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => (document.body.style.overflowY = "auto");
    }, []);

    let runAnimationForCopyBtn = false;

    const handleCopy = (e) => {
        if (!runAnimationForCopyBtn) {
            runAnimationForCopyBtn = true;
            e.target.textContent = "Copied !";

            setTimeout(() => {
                runAnimationForCopyBtn = false;
                e.target.textContent = "Copy";
            }, 1500);
        }

        navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValues(values)}`);
    };

    return (
        <div
            className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
            onClick={closeModal}
        >
            <div
                className="bg-slate-100 p-10 rounded text-slate-900 mb-[10vh] max-w-[400px]"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between gap-5 items-baseline">
                    <p className="flex mr-4 ">
                        Here is you code{" "}
                        <IconContext.Provider
                            value={{ color: "blue", size: "1.2em" }}
                        >
                            <FaCss3Alt className="self-center ml-1" />
                        </IconContext.Provider>
                    </p>
                    <div className="flex ">
                        <button
                            className="rounded bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white text-sm mr-2 ml-auto"
                            onClick={handleCopy}
                        >
                            Copy
                        </button>
                        <button
                            className="rounded bg-red-600 hover:bg-red-700 px-3 py-1 text-white text-sm"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>

                <p className="w-full bg-gray-200 p-3 mt-4 rounded">
                    <span className="font-semibold">box-shadow:</span>{" "}
                    {getBoxShadowValues(values)}
                </p>
            </div>
        </div>
    );
};
