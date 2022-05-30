import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/home" element={<LazyHome />} />
      </Routes>
    </Router>
  );
}

export default App;
