import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LeftContainer } from "./layouts/LeftContainer";
import { RightContainer } from "./layouts/RightContainer";

const App = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Header />
            </header>

            <main
                className={`${
                    darkMode ? "bg-gray-500" : "bg-gray-200"
                } flex flex-wrap flex-grow justify-center items-center px-10 md:flex-nowrap`}
            >
                <LeftContainer />
                <RightContainer />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};
export default App;
