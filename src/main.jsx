import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import store from "./Store/store.js";
import { createBrowserRouter, RouterProvider, useParams, } from "react-router-dom";
import Movies from "./components/Pages/MoviePages/Movies.jsx"
import Stream from "./components/Pages/Stream/Stream.jsx"
import Events from "./components/Pages/Events/Events.jsx"
import Hero from './components/Hero/Hero.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
        path: "/",
        element: <Hero/>
    },
    {
      path: '/movies',
      element: <Movies/>
    },
    {
      path: '/stream',
      element: <Stream/>
    },
    {
      path: '/events',
      element: <Events/>
    },
  ]
}])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
