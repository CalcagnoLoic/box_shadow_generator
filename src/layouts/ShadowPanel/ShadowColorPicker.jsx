import { useDispatch } from "react-redux";
import { updateValueShadow } from "../../features/shadows";

export const ShadowColorPicker = ({ shadowID, inputData }) => {
    const dispatch = useDispatch()

    const handleInput = (e) => {
        dispatch(
            updateValueShadow ({
                inputNumber: inputData.inputNumber, 
                value: e.target.value,
                shadowID
            })
        )
    }

    return (
        <>
            <p className="mb-2">{inputData.name}</p>
            <div className="flex">
                <input
                    type="text"
                    className="flex-grow border-gray-400 border-[1.1px] rounded px-2 py-1 focus:outline-1 outline-gray-400"
                    value={inputData.value}
                    onChange={handleInput}
                />
                <input
                    type="color"
                    className="self-center h-[35px] cursor-pointer"
                    value={inputData.value}
                    onChange={handleInput}
                />
            </div>
        </>
    );
};
