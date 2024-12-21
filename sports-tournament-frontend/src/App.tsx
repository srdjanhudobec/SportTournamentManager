
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element:<LandingPage/>},
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
