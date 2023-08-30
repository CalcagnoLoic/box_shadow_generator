import { ModalBtn } from "./Modal/ModalBtn";
import { getBoxShadowValues } from "../../utils/getBoxShadowValues";
import { useSelector } from "react-redux";

export const Visualisation = () => {
    const values = useSelector((state) => state.shadows);
    const valuesBox = useSelector((state) => state.boxProperties);

    return (
        <div className="flex flex-col p-5 sm:ml-14 lg:ml-28">
            <ModalBtn />
            <div
                className="bg-white h-[250px] w-[250px] rounded-xl mb-20 lg:mb-40"
                style={{
                    boxShadow: `${getBoxShadowValues(values).slice(0, -1)}`,
                    borderRadius: `${valuesBox[0].value}px`,
                    height: `${valuesBox[1].value}px`,
                    width: `${valuesBox[2].value}px`,
                    backgroundColor: `${valuesBox[3].value}`,
                }}
            ></div>
        </div>
    );
};
