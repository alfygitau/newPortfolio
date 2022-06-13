import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Homepage } from "./routes/Homepage/Homepage";
import { About } from "./routes/About/About";
import { Home } from "./routes/Homepage/Home";
import { Resume } from "./routes/Resume/Resume";
import { NotFound } from "./routes/NotFound/NotFound";
import { Contact } from "./routes/Contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* all public routes */}
          <Route path="/" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* catch all routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
