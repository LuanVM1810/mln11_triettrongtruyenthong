import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import BanHocTriet from "./pages/BanHocTriet";
import BanTinTrietLayout from "./layouts/BanTinTrietLayout";
import News from "./components/News/News";
import BanTinSo1 from "./components/BanTinSo1/BanTinSo1";
import BanTinSo2 from "./components/BanTinSo2/BanTinSo2";
import BanTinSo3 from "./components/BanTinSo3/BanTinSo3";
import TudienPage from "./pages/TudienPage";
import Tudien from "./components/Tudien/Tudien";
import TuDienTruyenThong from "./components/TuDienTruyenThong/TuDienTruyenThong";

export default function App() {
  return (
    <div className="h-screen ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ban-tin-triet" element={<BanTinTrietLayout />}>
          <Route index element={<News />} />
          <Route path="1" element={<BanTinSo1 />} />
          <Route path="2" element={<BanTinSo2 />} />
          <Route path="3" element={<BanTinSo3 />} />
        </Route>
        <Route path="ban-hoc-triet" element={<BanHocTriet />} />
        <Route path="tu-dien" element={<TudienPage />}>
          <Route index element={<Tudien />} />
          <Route path="truyenthong" element={<TuDienTruyenThong />} />
        </Route>
      </Routes>
    </div>
  );
}
