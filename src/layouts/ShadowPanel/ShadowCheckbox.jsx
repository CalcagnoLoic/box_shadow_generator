import { useSelector, useDispatch } from "react-redux";
import { updateCheckbox } from "../../features/shadows";

export const ShadowCheckbox = ({ name, shadowID }) => {
    const dispatch = useDispatch();

    const checkBtn = useSelector((state) =>
        state.shadows.find((shadow) => shadow.id === shadowID)
    );

    return (
        <>
            <input
                type="checkbox"
                className="self-center mr-2"
                onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
                checked={checkBtn[name]}
                id={`checkbox-${name}-${shadowID}`}
            />
            <label className="mr-5" htmlFor={`checkbox-${name}-${shadowID}`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </>
    );
};
