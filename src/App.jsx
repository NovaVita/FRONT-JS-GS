import { Outlet } from "react-router-dom";
import "./style/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
