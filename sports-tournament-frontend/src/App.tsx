
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import RootLayout from './pages/RootLayout';
import TeamDetailsPage from './pages/TeamDetailsPage';
import TeamsPage from './pages/TeamsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element:<LandingPage/>},
      {
        path: "/teams/:teamId", 
        element: <TeamDetailsPage />,
      },
      {
        path: "/my-teams", 
        element: <TeamsPage own={true} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
