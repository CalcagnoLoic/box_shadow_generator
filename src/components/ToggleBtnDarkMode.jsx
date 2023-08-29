import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Switch from "@mui/material/Switch";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const ToggleBtnDarkMode = () => {
    const { ToggleTheme, darkMode } = useContext(ThemeContext);

    return (
        <div className="sm:absolute sm:top-5 sm:right-5 flex">
            {darkMode ? (
                <IconContext.Provider value={{ color: "white" }}>
                    <BsFillMoonStarsFill className="self-center" />
                </IconContext.Provider>
            ) : (
                ""
            )}
            <Switch onClick={ToggleTheme} />
            {darkMode ? (
                ""
            ) : (
                <IconContext.Provider value={{ color: "orange" }}>
                    <BsFillSunFill className="self-center" />
                </IconContext.Provider>
            )}
        </div>
    );
};
