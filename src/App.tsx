import { Route, Routes } from "react-router-dom";

import LoginPage from "./stories/Components/Pages/LoginPage";
import HomeTemplate from "./stories/Components/Templates/HomeTemplate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
