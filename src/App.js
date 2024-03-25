import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router";
import Articles from "./containers/Articles";
import ArticleDetails from "./containers/ArticleDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Articles />} />
        <Route path={"/:id"} element={<ArticleDetails />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
