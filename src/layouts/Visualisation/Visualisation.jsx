import {ModalBtn} from "./Modal/ModalBtn"

export const Visualisation = () => {
    return (
        <div className="flex flex-col p-5 ml-10 md:ml-14 lg:ml-28">
            <ModalBtn />
            <div className="bg-white h-[250px] w-[250px] rounded-xl mb-20 lg:mb-40"></div>
        </div>
    );
};
