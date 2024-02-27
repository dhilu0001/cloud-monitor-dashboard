import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Error, Landing, LandingLoader } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
