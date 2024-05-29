import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import style from './pages/style/style.css?inline'
import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App.jsx';
import Tab2 from './pages/Tab2';
import AddDoctor from './pages/AddDoctor.jsx';
import DoctorLogin from './pages/DoctorLogin.jsx';
import SignIn from './pages/SignIn.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/DoctorLogin',
        element: <DoctorLogin />
      }, {
        path: '/SignIn',
        element: <SignIn />
      }, {
        path: '/Dashboard',
        element: <Dashboard />
      }, {
        path: '/AddDoctor',
        element: <AddDoctor />
      },
      {path: '/visits/:visitId',
        element: <Tab2/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
