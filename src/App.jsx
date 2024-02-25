import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home, Error, Landing } from "./pages";

import { LandingLoader } from "./pages/landing/LandingLoader";

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
function App() {
  return <RouterProvider router={router} />;
}

export default App;
