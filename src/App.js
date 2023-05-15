import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Category } from "./components/Category";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LoginPage } from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/category" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
