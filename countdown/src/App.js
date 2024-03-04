//import "./styles.css";
import Counter from "./Counter";
import MainMenu from "./MainMenu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    // <>
    // <Counter />
    // </>
    <Router>
      <div>
        <Routes>
          <Route path="/countdown" element={<Counter/>} />
          <Route path="/main-menu" element={<MainMenu/>} />
        </Routes>
      </div>
    </Router>
  );
}
