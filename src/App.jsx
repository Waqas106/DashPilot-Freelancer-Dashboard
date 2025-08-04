import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Overview from "./pages/overview";
import Projects from "./pages/projects";

const iconList = Object.values(Icons).filter(
  (icon) => icon && typeof icon === "object" && icon.iconName
);
library.add(...iconList);

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
