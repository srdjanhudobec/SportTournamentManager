
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import TeamsPage from './pages/TeamsPage'
import Header from './shared/Header'
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
