import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "./Layout.css";

const DashboardLayout = () => {
  return (
    <>
      <div className="page-layout">
        <aside>
            <Sidebar />
        </aside>
        <div className="main-content">
          <Header />
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
