import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../features/shadows";
import { Shadow } from "./Shadow";

export const ShadowPanel = () => {
    const dispatch = useDispatch();
    const shadows = useSelector((state) => state.shadows);

    return (
        <div>
            <div className="flex justify-between px-6 py-4 border-b-2 border-gray-400">
                {" "}
                {/*darkmode ici*/}
                <p className="font-semibold text-lg my-2">Customize shadows</p>
                <button
                    className="cursor-pointer rounded bg-blue-500 text-white py-2 px-6 self-center"
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
