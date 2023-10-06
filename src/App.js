import { Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Menu />
      <div className="vh-100">
        <h1 className="text-center">Aplicación de Usuarios</h1>
        <Outlet />
      </div>
    </>
  );
}
export default App;
