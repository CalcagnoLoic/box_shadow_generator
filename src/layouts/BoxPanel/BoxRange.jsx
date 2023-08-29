import { useDispatch } from "react-redux";
import { updateBoxPropertiesValue } from "../../features/boxProperties";

export const BoxRange = ({ inputData }) => {
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(
            updateBoxPropertiesValue({
                value: e.target.value,
                inputNumber: inputData.inputNumber,
            })
        );
    };

    return (
        <div className="my-8">
            <div className="flex justify-between">
                <p>{inputData.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                    <input
                        value={inputData.value}
                        onChange={handleInput}
                        type="number"
                        className="border-gray-400 border-[1.1px] rounded w-14 h-8 text-center"
                    />
                    <span>px</span>
                </div>
            </div>
            <div className="relative w-full flex items-center z-0">
                <input
                    type="range"
                    min={inputData.minMax[0]}
                    max={inputData.minMax[1]}
                    value={inputData.value}
                    onChange={handleInput}
                    className="w-full h-[2px] rounded-xl appearance-none bg-gray-400 cursor-pointer"
                />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-400 w-0.5 h-10 rounded"></div>
            </div>
        </div>
    );
};
