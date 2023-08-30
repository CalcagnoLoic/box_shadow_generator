import { updateValueShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";

export const ShadowRange = ({ inputData, shadowID }) => {
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(
            updateValueShadow({
                inputNumber: inputData.inputNumber,
                value: e.target.value,
                shadowID,
            })
        );
    };

    return (
        <div className="my-4">
            <div className="flex justify-between">
                <p>{inputData.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                    <input
                        type="number"
                        className="border-gray-400 border-[1.1px] rounded w-14 h-8 text-center"
                        value={inputData.value}
                        onChange={handleInput}
                    />
                    <span>px</span>
                </div>
            </div>
            <div className="relative w-full flex items-center z-0">
                <input
                    type="range"
                    className="w-full h-[2px] rounded-xl appearance-none bg-gray-400 cursor-pointer"
                    value={inputData.value}
                    min={inputData.minMax[0]}
                    max={inputData.minMax[1]}
                    onChange={handleInput}
                />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-400 w-0.5 h-10 rounded"></div>
            </div>
        </div>
    );
};
