
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

 function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
    
  );
}

export default App;

