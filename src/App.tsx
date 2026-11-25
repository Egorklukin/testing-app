import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage, StatisticsPage } from "./pages/StudentPages/StudentPages";
import { StudentLayout } from "./components/Layouts/StudentLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AdminLayout } from "./components/Layouts/AdminLayout";
import {
  AdminMainPage,
  AdminTestsPAge,
  AdminUsersPage,
} from "./pages/AdminPages";
import "./App.css";
import { TestsPage } from "./pages/TestsPage/TestsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminMainPage />} />
          <Route path="tests" element={<AdminTestsPAge />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="tests" element={<TestsPage />} />
          <Route path="stats" element={<StatisticsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
