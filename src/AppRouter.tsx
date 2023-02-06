import { Route, Routes } from "react-router-dom";
import { NavLinks } from "./models";
import { Home } from "./pages";

export default function AppRouter() {
  const PAGE_LIST = [{ path: NavLinks.Home, element: <Home /> }];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
