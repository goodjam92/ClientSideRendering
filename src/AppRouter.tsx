import { Route, Routes } from "react-router-dom";
import { Home, SignIn } from "pages";
import { NavLinks } from "models";

export default function AppRouter() {
  const PAGE_LIST = [
    { path: NavLinks.Home, element: <Home /> },
    { path: NavLinks.SignIn, element: <SignIn /> }
  ];

  return (
    <Routes>
      {PAGE_LIST.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
