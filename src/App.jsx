import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeOnly from "./pages/CodeOnly";
import Global from "./pages/Global";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PWABadge from "./PWABadge.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<CodeOnly />} />
          <Route path="/global" element={<Global />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <PWABadge />
    </>
  );
};

export default App;
