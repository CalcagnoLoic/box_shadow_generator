import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LeftContainer } from "./layouts/LeftContainer";
import { RightContainer } from "./layouts/RightContainer";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Header />
            </header>

            <main className="flex flex-wrap flex-grow justify-center items-center bg-gray-200 px-10 md:flex-nowrap">
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
