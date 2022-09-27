import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import Layout from "./layout";
import FavoritePage from "./Pages/FavoritePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
