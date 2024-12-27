import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./auth/Login";
import MainLeyout from "./layout/MainLeyout";
import Dahboard from "./pages/Dahboard";
import Createbooking from "./pages/Createbooking";
import Bookingdetails from "./pages/Bookingdetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLeyout />,
    children: [
      {
        path: "/blaze/dashboard",
        element: <Dahboard />,
      },
      {
        path: "/blaze/booking/createbooking",
        element: <Createbooking />,
      },
      {
        path: "/admin/bookingdetails",
        element: < Bookingdetails/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
