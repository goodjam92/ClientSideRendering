import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { firebaseApp } from "./services";
import AppStyle from "./styles/AppStyle";

function App() {
  useEffect(() => {
    console.log(firebaseApp);
  }, []);

  return (
    <div className="App">
      <AppStyle />
      <AppRouter />
    </div>
  );
}

export default App;
