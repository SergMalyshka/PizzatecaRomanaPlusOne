import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import style from './pages/style/style.css?inline'
import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App.jsx';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import AddDoctor from './pages/AddDoctor.jsx';
import DoctorLogin from './pages/DoctorLogin.jsx';
import SignIn from './pages/SignIn.jsx';
import Test from './pages/Test.jsx';
import ErrorPage from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Tab1 />
      }, {
        path: '/Tab2',
        element: <Tab2 />
      }, {
        path: '/DoctorLogin',
        element: <DoctorLogin />
      }, {
        path: '/SignIn',
        element: <SignIn />
      }, {
        path: '/Test',
        element: <Test />
      }, {
        path: '/AddDoctor',
        element: <AddDoctor />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
