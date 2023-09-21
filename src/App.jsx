import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import PetResults from './pages/PetResults';
import PetProfile from './pages/PetProfile';
import GetAPlant from './pages/GetAPlant';
import FindYourPet from './pages/FindYourPet';
import AddAPet from './pages/AddAPet';
import UserProfile from './pages/UserProfile';
import { createGlobalStyle } from 'styled-components';

// Define your routes in an array
const routes = [
  { path: "/", element: <Welcome /> }, // Welcome as the first page
  { path: "/home", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/findyourpet", element: <FindYourPet /> },
  { path: "/petprofile", element: <PetProfile /> },
  { path: "/petresults", element: <PetResults /> },
  { path: "/getaplant", element: <GetAPlant /> },
  { path: "/addapet", element: <AddAPet /> },
  { path: "/userprofile", element: <UserProfile /> }
];

const GlobalStyles = createGlobalStyle`
  /* Reset some default styles */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  /* Define that body takes up all screen space */
  body {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }

 
  #root {
    flex-grow: 1; /* Makes #root element fill remaining vertical space */
  }

  /* You can add more global styles here */
`;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* Use Switch to ensure only one route is matched */}
        
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          {/* Add a "not found" route here if needed */}
       
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

