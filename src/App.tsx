import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import BanHocTriet from "./pages/BanHocTriet";
import BanTinTrietLayout from "./layouts/BanTinTrietLayout";
import News from "./components/News/News";
import BanTinSo1 from "./components/BanTinSo1/BanTinSo1";
import BanTinSo2 from "./components/BanTinSo2/BanTinSo2";

export default function App() {
  return (
    <div className="h-screen ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ban-tin-triet" element={<BanTinTrietLayout />}>
          <Route index element={<News />} />
          <Route path="1" element={<BanTinSo1 />} />
          <Route path="2" element={<BanTinSo2 />} />
        </Route>
        <Route path="ban-hoc-triet" element={<BanHocTriet />} />
      </Routes>
    </div>
  );
}
