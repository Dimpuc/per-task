import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { InfoPage } from "./pages/InfoPage";
import { MainPage } from "./pages/MainPage";

import { routerPath } from "./router/routerPath";

import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routerPath.mainPage} element={<MainPage />} />
          <Route path={routerPath.infoPage} element={<InfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
