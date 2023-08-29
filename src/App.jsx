import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Header />
            </header>

            <main className="flex flex-wrap flex-grow justify-center items-center bg-gray-300 px-10 md:flex-nowrap">
                <p>Ici la box de gauche</p>
                <p>Ici la box de droite</p>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};
export default App;
