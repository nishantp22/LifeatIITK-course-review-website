import Home from "./Home";
import MTH111_112 from "./MTH111_112";
import MTH113_114 from "./MTH113_114";
import ESC111_112 from "./ESC111_112";
import TA111 from "./TA111";
import PHY114 from "./PHY114";
import CHM112_113 from "./CHM112_113";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="MTH111_112" element={<MTH111_112 />} />
          <Route path="MTH113_114" element={<MTH113_114 />} />
          <Route path="ESC111_112" element={<ESC111_112 />} />
          <Route path="TA111" element={<TA111 />} />
          <Route path="PHY114" element={<PHY114 />} />
          <Route path="CHM112_113" element={<CHM112_113 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
