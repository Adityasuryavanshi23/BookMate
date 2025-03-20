import { Allroutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
