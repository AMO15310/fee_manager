import SignupPage from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

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
    path: "*",
    element: <div>404</div>,
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
