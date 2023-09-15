import "./App.css";
import { Header } from "./components/header";
import { Presentation } from "./components/presentation";
import { Technologies } from "./components/technologies";
import { Work } from "./components/work";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Presentation />
        <Work />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
