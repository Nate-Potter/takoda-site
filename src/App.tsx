import { HashRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <div className="app">
          <Header />
          <ScrollToTop />
          <AppRoutes />

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
