import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { Home, SignIn } from "pages";
// eslint-disable-next-line import/no-unresolved
import { NavLinks } from "models";

export default function AppRouter() {
  const PAGE_LIST = [
    { path: NavLinks.Home, element: <Home /> },
    { path: NavLinks.SignIn, element: <SignIn /> }
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
