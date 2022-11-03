import { Login } from "./pages/auth/Login.component";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <ToastContainer position="top-center" />
      <Login />
    </div>
  );
}

export default App;
