import SignupPage from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/Home";
import Error from "./components/404";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>;
    </main>
  );
}

export default App;
