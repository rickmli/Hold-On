import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetialPage";
import TagListPage from "./pages/TagListPage";
import TagDetailPage from "./pages/TagDetailPage";
import ArchivesPage from "./pages/Archives";
import Search from "./pages/Search";
import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<PostListPage />} />
          <Route path="/post/:postSlug" element={<PostDetailPage />} />
          <Route path="/tag" element={<TagListPage />} />{" "}
          <Route path="/tag/:tagName" element={<TagDetailPage />} />{" "}
          <Route path="/archives" element={<ArchivesPage />} />{" "}
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
