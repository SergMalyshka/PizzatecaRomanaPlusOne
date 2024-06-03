import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App.jsx';
import VisitForm from './pages/VisitForm.jsx';
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
        element: <VisitForm/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
