import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import BanHocTriet from "./pages/BanHocTriet";
import BanTinTriet from "./pages/BanTinTriet";

export default function App() {
  return (
    <div className="min-h-screen ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ban-tin-triet" element={<BanTinTriet />} />
        <Route path="ban-hoc-triet" element={<BanHocTriet />} />
      </Routes>
    </div>
  );
}
